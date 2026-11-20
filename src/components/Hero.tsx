import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

const currentYear = new Date().getFullYear()

export function Hero() {
  return (
    <section id="inicio" className="mx-auto flex min-h-screen max-w-6xl scroll-mt-20 flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
      <div className="max-w-3xl">
        <p className="eyebrow mb-6"><span className="eyebrow-dot" />Portafolio · {currentYear}</p>
        <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">{profile.name}</h1>
        <p className="mt-4 text-lg text-text-secondary sm:text-xl">{profile.title}</p>
        <p className="mt-2 text-sm text-text-secondary">{profile.location}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#proyectos" className="group inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface transition-colors hover:bg-accent/90">
            Ver proyectos
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent">
            <Download className="h-4 w-4" />
            Descargar CV
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4 text-text-secondary">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={'mailto:' + profile.email} className="transition-colors hover:text-accent" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
