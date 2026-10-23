# Portafolio — José Luis Carbajal Magallanes

Portafolio personal estático construido con React 19, TypeScript, Vite 8 y Tailwind CSS 4.

## Requisitos

- Node.js 20 o superior
- npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo con HMR
npm run build    # verificación de tipos + build de producción en dist/
npm run preview  # previsualizar el build de producción
npm run lint     # análisis estático con oxlint
npm run typecheck # verificación de tipos sin emitir
```

## Estructura

```
src/
  data/profile.ts       # Todo el contenido editable (datos, proyectos, experiencia, certificaciones)
  components/           # Secciones y UI (Navbar, Hero, About, Skills, Projects, ...)
  components/icons.tsx  # Iconos de marca (GitHub, LinkedIn) en SVG inline
  index.css             # Tokens de color del tema Tailwind y estilos base
public/
  cv/                   # CV descargable en PDF
  img/projects/         # Capturas de proyectos
  img/certs/            # Certificados (opcional; ver nota abajo)
  favicon.svg, og.svg   # Identidad visual y metadatos sociales
```

## Editar contenido

Todo el contenido vive en `src/data/profile.ts`. Los proyectos se muestran en dos grupos según `featured: true/false`, y las certificaciones con `file: null` aparecen sin enlace de descarga.

Para añadir un certificado descargable:

1. Copia la imagen o PDF en `public/img/certs/`.
2. Asigna la ruta en `profile.ts`, por ejemplo `file: '/img/certs/mi-certificado.pdf'`.

## Despliegue en Vercel

El proyecto incluye `vercel.json` con la configuración de build. Importa el repositorio en Vercel (framework detectado: Vite) o ejecuta:

```bash
npx vercel
```

Build command: `npm run build` · Output directory: `dist`

> Las rutas de recursos usan la raíz del sitio (`/cv/...`, `/img/...`). Si se despliega en un subdirectorio (por ejemplo GitHub Pages), configura `base` en `vite.config.ts` y ajusta las rutas de `profile.ts`.
