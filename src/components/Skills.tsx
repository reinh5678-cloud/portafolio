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
    <section id="stack" className="section mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="mb-10">
        <p className="eyebrow mb-3"><span className="eyebrow-dot" />02 / Stack</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Stack Tecnológico</h2>
        <p className="mt-3 text-sm text-text-secondary">Tecnologías con las que trabajo</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} className="card card-hover p-6">
            <h3 className="mb-4 text-lg font-medium">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
