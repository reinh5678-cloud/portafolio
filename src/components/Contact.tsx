import { FileText, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contacto</h2>
        <p className="mt-2 text-text-secondary">¿Tienes un proyecto o idea? Hablemos.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={'mailto:' + profile.email} className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60">
            <Mail className="h-5 w-5 text-text-secondary" />
            <div>
              <p className="text-sm">Email</p>
              <p className="text-sm text-text-secondary">{profile.email}</p>
            </div>
          </a>
          <a href={'tel:' + profile.phone.replace(/\s+/g, '')} className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60">
            <Phone className="h-5 w-5 text-text-secondary" />
            <div>
              <p className="text-sm">Teléfono</p>
              <p className="text-sm text-text-secondary">{profile.phone}</p>
            </div>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60">
            <FileText className="h-5 w-5 text-text-secondary" />
            <div>
              <p className="text-sm">GitHub</p>
              <p className="text-sm text-text-secondary">@reinh5678-cloud</p>
            </div>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60">
            <FileText className="h-5 w-5 text-text-secondary" />
            <div>
              <p className="text-sm">LinkedIn</p>
              <p className="text-sm text-text-secondary">Ver perfil</p>
            </div>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-bg">
            Descargar CV en PDF
          </a>
        </div>
      </div>
    </section>
  )
}
