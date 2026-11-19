import { Code2, ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon } from './icons'

export function Projects() {
  const projects = [
    ...profile.projects.filter((p) => p.featured),
    ...profile.projects.filter((p) => !p.featured),
  ]

  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proyectos</h2>
        <p className="mt-2 text-text-secondary">
          Proyectos personales y módulos desarrollados en Cuántica Group
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/60">
            {project.image ? (
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
              </div>
            ) : (
              <div className="flex items-center gap-2 border-b border-border bg-surface px-6 py-4 text-xs text-text-secondary">
                <Code2 className="h-4 w-4" />
                Proyecto interno
              </div>
            )}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
              {project.features.length > 0 && (
                <ul className="space-y-1 text-sm text-text-secondary">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              )}
              <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-text">
                    <GithubIcon className="h-4 w-4" />
                    Código
                  </a>
                ) : (
                  <span>Sin repositorio público</span>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-text">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
