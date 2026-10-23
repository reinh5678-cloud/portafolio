import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  return (
    <section id="inicio" className="relative mx-auto flex min-h-screen max-w-6xl scroll-mt-20 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-2xl font-bold text-bg shadow-[0_0_80px_-20px_rgba(59,130,246,0.9)]">
        JC
      </div>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{profile.name}</h1>
      <p className="mt-3 text-lg text-text-secondary sm:text-xl">{profile.title}</p>
      <p className="mt-2 text-sm text-text-secondary">{profile.location}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href="#proyectos" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-bg transition-all hover:shadow-[0_0_60px_-20px_rgba(59,130,246,0.8)]">
          Ver proyectos
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
        <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-surface">
          <Download className="h-4 w-4" />
          Descargar CV
        </a>
      </div>
      <div className="mt-6 flex items-center gap-4 text-text-secondary">
        <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-text" aria-label="GitHub">
          <GithubIcon className="h-5 w-5" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-text" aria-label="LinkedIn">
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a href={'mailto:' + profile.email} className="transition-colors hover:text-text" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
