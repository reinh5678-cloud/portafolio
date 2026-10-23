import { ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon } from './icons'

export function Projects() {
  const featured = profile.projects.filter((p) => p.featured)
  const others = profile.projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proyectos</h2>
        <p className="mt-2 text-text-secondary">Proyectos destacados</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((project) => (
          <article key={project.id} className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/60">
            <div className="relative aspect-video overflow-hidden">
              <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4 p-6">
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
              <ul className="space-y-1 text-sm text-text-secondary">
                {project.features.slice(0, 4).map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text">
                  <GithubIcon className="h-4 w-4" />
                  Código
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {others.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-medium">Otros proyectos</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {others.map((project) => (
              <article key={project.id} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <p className="mt-1 text-sm text-text-secondary">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text">
                  <GithubIcon className="h-4 w-4" />
                  Ver en GitHub
                </a>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
