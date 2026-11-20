import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#141210' : '#f7f4ef')
    try {
      localStorage.setItem('portafolio-theme', dark ? 'dark' : 'light')
    } catch {
      /* localStorage puede fallar en modo privado */
    }
  }, [dark])

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty('overflow')
      return
    }
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 640) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.removeProperty('overflow')
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="font-display min-w-0 truncate text-base font-semibold">
          {profile.name.split(' ').slice(0, 2).join(' ')}
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Activar tema claro' : 'Activar tema oscuro'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <ul className="hidden items-center gap-6 text-sm sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text-secondary transition-colors hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cv} download className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-surface transition-colors hover:bg-accent/90">
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-border/60 bg-bg sm:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-text-secondary">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <a href={profile.cv} download className="inline-flex rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-surface transition-colors hover:bg-accent/90">
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
