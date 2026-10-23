import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-text-secondary sm:flex-row sm:px-6">
        <p>© {currentYear} {profile.name}. Todos los derechos reservados.</p>
        <p>Desarrollado con React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  )
}
