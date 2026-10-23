import { profile } from '../data/profile'

const groups = [
  { title: 'Frontend', items: profile.skills.frontend },
  { title: 'Backend', items: profile.skills.backend },
  { title: 'Bases de Datos', items: profile.skills.database },
  { title: 'DevOps & Herramientas', items: profile.skills.devops },
  { title: 'Análisis & BI', items: profile.skills.data },
]

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Stack Tecnológico</h2>
        <p className="mt-2 text-text-secondary">Tecnologías con las que trabajo</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1 text-sm text-text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
