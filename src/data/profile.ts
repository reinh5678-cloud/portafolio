export const profile = {
  name: 'José Luis Carbajal Magallanes',
  title: 'Desarrollador Full Stack | Bases de Datos',
  location: 'Chincha Alta, Ica - Perú',
  email: 'carbajalmagallanesjoseluis@gmail.com',
  phone: '+51 920 639 220',
  github: 'https://github.com/reinh5678-cloud',
  linkedin: 'https://www.linkedin.com/in/jose-luis-carbajal-magallanes/',
  cv: '/cv/Jose_Luis_CarbajalCV.pdf',
  about: 'Bachiller en Ingeniería de Sistemas con experiencia práctica en desarrollo full stack, APIs REST, bases de datos relacionales y despliegue de aplicaciones empresariales. He intervenido en soluciones de CRM, inventario, órdenes de trabajo, asistencia, reportes y portales web, utilizando React, Vue, ASP.NET Core, FastAPI, PostgreSQL, MySQL y Docker. Me especializo en analizar flujos existentes, resolver incidencias de integración y producción, y convertir requerimientos operativos en mejoras verificables.',
  skills: {
    frontend: ['React 19', 'Vue 3', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS 4', 'Vite'],
    backend: ['C#', 'ASP.NET Core 8', 'Python', 'FastAPI', 'Django', 'Node.js', 'APIs REST'],
    database: ['PostgreSQL', 'MySQL', 'SQL', 'Entity Framework Core', 'Alembic', 'Diseño de esquemas', 'Consultas'],
    devops: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'GitHub Actions', 'Linux', 'SSH'],
    data: ['Excel Intermedio', 'Power BI', 'Power Query', 'DAX', 'Análisis de datos']
  },
  projects: [
    {
      id: 'vetclinic',
      name: 'VetClinic - Sistema de Gestión de Clínica Veterinaria',
      description: 'Sistema monousuario para gestionar pacientes, agenda, historia clínica, hospitalización, inventario/farmacia, facturación y reportes con control de acceso por roles.',
      stack: ['ASP.NET Core 8', 'EF Core', 'PostgreSQL 16', 'React 19', 'TypeScript', 'Docker'],
      features: ['Arquitectura por capas', 'Autenticación JWT + roles/permisos', 'Historia clínica digital', 'Inventario y facturación', 'Despliegue con Docker Compose'],
      image: '/img/projects/vetclinic/flujo-completo.png',
      github: 'https://github.com/reinh5678-cloud/vetclinic',
      demo: null,
      featured: true
    },
    {
      id: 'dashboard',
      name: 'Dashboard Interactivo de Análisis de Ventas',
      description: 'Dashboard interactivo en Power BI para analizar ventas por producto, categoría, sede y periodo, con medidas DAX para indicadores clave.',
      stack: ['Power BI', 'Power Query', 'DAX', 'Excel'],
      features: ['Limpieza y transformación de datos', 'Medidas DAX (ventas totales, ticket promedio)', 'Visualizaciones interactivas', 'Análisis por sede y periodo'],
      image: '/img/projects/dashboard/dashboard-preview.jpeg',
      github: 'https://github.com/reinh5678-cloud/dashboard',
      demo: null,
      featured: true
    },
    {
      id: 'canelita',
      name: 'Canelita - Gestión de Repostería (App Móvil)',
      description: 'App móvil para gestionar postres, ingredientes y calcular costos con persistencia local en SQLite, funcionando sin internet.',
      stack: ['Flutter', 'Dart', 'SQLite', 'Material Design'],
      features: ['Gestión de recetas e ingredientes', 'Cálculo automático de costos', 'Persistencia local SQLite', 'Funciona sin internet'],
      image: '/img/projects/canelita/logoc.png',
      github: 'https://github.com/reinh5678-cloud/respoteriaflutter',
      demo: null,
      featured: true
    },
    {
      id: 'reposteria',
      name: 'Reposteria - Gestión de Repostería',
      description: 'Sistema para gestión de repostería con funcionalidades de inventario y ventas.',
      stack: ['Python'],
      features: ['Gestión de productos', 'Control de inventario'],
      image: '/img/projects/canelita/keke-vainilla.jpg',
      github: 'https://github.com/reinh5678-cloud/Reposteria',
      demo: null,
      featured: false
    }
  ],
  experience: [
    {
      company: 'Cuántica Group S.A.C.',
      role: 'Desarrollador Full Stack',
      period: 'Jun 2026 - Sep 2026',
      location: 'Perú',
      points: [
        'Analicé arquitecturas y flujos de aplicaciones empresariales para identificar dependencias, reglas de negocio, integraciones y riesgos.',
        'Desarrollé y mejoré módulos de CRM, pedidos multicanal, inventario, órdenes de trabajo, asistencia, actividades técnicas, checklists y gestión de evidencias.',
        'Implementé interfaces responsivas con React y Vue con filtros persistentes, paginación, formularios dinámicos y exportaciones PDF/CSV.',
        'Construí y ajusté APIs REST con ASP.NET Core y FastAPI, consultas con EF Core, DTOs, validaciones, migraciones sobre PostgreSQL y MySQL.',
        'Diagnosticé errores HTTP 500, inconsistencias frontend-backend, fallos de mapeo y verifiqué correcciones con compilaciones y pruebas.',
        'Preparé entornos con Docker Compose y participé en despliegues con Git, SSH y GitHub Actions.'
      ]
    },
    {
      company: 'Hospital San José de Chincha',
      role: 'Practicante preprofesional - Área de Farmacia SISMED',
      period: 'Ago 2025 - Nov 2025',
      location: 'Chincha, Perú',
      points: [
        'Gestioné y validé información crítica en SISMED para mantener la integridad de los registros institucionales.',
        'Elaboré reportes mensuales de inventario y consumo con Excel para apoyar el control operativo.',
        'Identifiqué inconsistencias en los datos y apoyé la digitalización de procesos administrativos.'
      ]
    },
    {
      company: 'Supermercados Peruanos S.A. (Compañía Food Retail S.A.C.)',
      role: 'Representante de servicios',
      period: 'Feb 2023 - Mar 2026',
      location: 'Perú',
      points: [
        'Atendí y resolví incidencias de clientes, coordinando con áreas internas para acelerar la solución de problemas operativos.',
        'Fortalecí la atención al cliente mediante comunicación clara, seguimiento y trabajo en equipo.'
      ]
    }
  ],
  education: {
    institution: 'Universidad Privada San Juan Bautista',
    degree: 'Bachiller en Ingeniería de Sistemas',
    period: 'Completado'
  },
  certifications: [
    { name: 'Análisis de Datos con Minitab', file: null },
    { name: 'SQL Server Intermedio', file: null },
    { name: 'UX/UI Fundamentals aplicando Figma', file: null },
    { name: 'Constancia de Prácticas - Hospital San José de Chincha', file: '/img/certs/constancia.jpg' },
    { name: 'Certificado de Trabajo - Cuántica Group S.A.C.', file: '/img/certs/cert-trabajo.jpg' }
  ]
} as const
