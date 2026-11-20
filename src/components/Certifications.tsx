import { Award } from 'lucide-react'
import { profile } from '../data/profile'

export function Certifications() {
  return (
    <section id="certificaciones" className="section mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="mb-10">
        <p className="eyebrow mb-3"><span className="eyebrow-dot" />05 / Certificaciones</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Certificaciones</h2>
        <p className="mt-3 text-sm text-text-secondary">Formación complementaria</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((cert) => (
          <article key={cert.name} className="card card-hover flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface">
                <Award className="h-4 w-4 text-accent" />
              </div>
              <p className="text-sm">{cert.name}</p>
            </div>
            {cert.file ? (
              <a href={cert.file} target="_blank" rel="noreferrer" className="text-sm text-text-secondary transition-colors hover:text-accent">
                Ver
              </a>
            ) : (
              <span className="text-sm text-text-secondary/60">—</span>
            )}
          </article>
        ))}
      </div>
      <div className="card mt-6 p-6">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text">Educación:</span> {profile.education.degree} - {profile.education.institution}
        </p>
      </div>
    </section>
  )
}
