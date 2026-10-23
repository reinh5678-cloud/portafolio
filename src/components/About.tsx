import { profile } from '../data/profile'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sobre mí</h2>
        <p className="mt-2 text-text-secondary">Perfil profesional</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <p className="max-w-4xl text-base leading-relaxed text-text-secondary">{profile.about}</p>
      </div>
    </section>
  )
}
