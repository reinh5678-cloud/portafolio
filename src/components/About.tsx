import { profile } from '../data/profile'

export function About() {
  return (
    <section id="sobre-mi" className="section mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="mb-10">
        <p className="eyebrow mb-3"><span className="eyebrow-dot" />01 / Perfil</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Sobre mí</h2>
      </div>
      <div className="card card-hover p-6 sm:p-8">
        <p className="max-w-4xl text-base leading-relaxed text-text-secondary">{profile.about}</p>
      </div>
    </section>
  )
}
