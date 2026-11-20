import { profile } from '../data/profile'

export function Experience() {
  return (
    <section id="experiencia" className="section mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="mb-10">
        <p className="eyebrow mb-3"><span className="eyebrow-dot" />04 / Experiencia</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Experiencia Profesional</h2>
        <p className="mt-3 text-sm text-text-secondary">Trayectoria laboral</p>
      </div>
      <div className="relative space-y-6">
        <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />
        {profile.experience.map((job, idx) => (
          <article key={idx} className="card card-hover relative p-6 sm:ml-10">
            <div className="absolute -left-10 top-6 hidden h-2 w-2 rounded-full bg-accent sm:block" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-medium">{job.role}</h3>
                <p className="text-sm text-text-secondary">{job.company} • {job.location}</p>
              </div>
              <span className="chip self-start">{job.period}</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-text-secondary">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
