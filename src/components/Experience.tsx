import { profile } from '../data/profile'

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experiencia Profesional</h2>
        <p className="mt-2 text-text-secondary">Trayectoria laboral</p>
      </div>
      <div className="relative space-y-6">
        <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />
        {profile.experience.map((job, idx) => (
          <article key={idx} className="relative rounded-2xl border border-border bg-card p-6 sm:ml-10">
            <div className="absolute -left-10 top-6 hidden h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-2 sm:block" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-medium">{job.role}</h3>
                <p className="text-text-secondary">{job.company} • {job.location}</p>
              </div>
              <span className="text-sm text-text-secondary">{job.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {job.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
