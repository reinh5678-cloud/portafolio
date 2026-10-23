import { FileText } from 'lucide-react'
import { profile } from '../data/profile'

export function Certifications() {
  return (
    <section id="certificaciones" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Certificaciones</h2>
        <p className="mt-2 text-text-secondary">Formación complementaria</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((cert) => (
          <article key={cert.name} className="flex items-center justify-between rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface">
                <FileText className="h-4 w-4 text-text-secondary" />
              </div>
              <p className="text-sm">{cert.name}</p>
            </div>
            {cert.file ? (
              <a href={cert.file} target="_blank" rel="noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text">
                Ver
              </a>
            ) : (
              <span className="text-sm text-text-secondary/60">—</span>
            )}
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text">Educación:</span> {profile.education.degree} - {profile.education.institution}
        </p>
      </div>
    </section>
  )
}
