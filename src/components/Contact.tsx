import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  return (
    <section id="contacto" className="section mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="mb-10">
        <p className="eyebrow mb-3"><span className="eyebrow-dot" />06 / Contacto</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Contacto</h2>
        <p className="mt-3 text-sm text-text-secondary">¿Tienes un proyecto o idea? Hablemos.</p>
      </div>
      <div className="card p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={'mailto:' + profile.email} className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-surface">
            <Mail className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="mt-1 text-xs break-all text-text-secondary">{profile.email}</p>
            </div>
          </a>
          <a href={'tel:' + profile.phone.replace(/\s+/g, '')} className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-surface">
            <Phone className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium">Teléfono</p>
              <p className="mt-1 text-xs text-text-secondary">{profile.phone}</p>
            </div>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-surface">
            <GithubIcon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium">GitHub</p>
              <p className="mt-1 text-xs text-text-secondary">@reinh5678-cloud</p>
            </div>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-surface">
            <LinkedinIcon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="mt-1 text-xs text-text-secondary">Ver perfil</p>
            </div>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface transition-colors hover:bg-accent/90">
            Descargar CV en PDF
          </a>
        </div>
      </div>
    </section>
  )
}
