const base = import.meta.env.BASE_URL

type Certificado = {
  nombre: string
  emisor: string
  detalle: string
  url: string
  verificacion?: string
}

export const certificados: Certificado[] = [
  {
    nombre: 'Analista de Datos',
    emisor: 'DataCamp',
    detalle: '6 jul 2025',
    url: `${base}certificados/analista-de-datos.pdf`,
  },
  {
    nombre: 'Ingeniería de Datos',
    emisor: 'DataCamp',
    detalle: '13 jul 2025 · 42 h',
    url: `${base}certificados/ingenieria-de-datos.pdf`,
  },
  {
    nombre: 'Python desde Cero',
    emisor: 'midudev',
    detalle: 'Curso completo',
    url: `${base}certificados/python-desde-cero.pdf`,
    verificacion: 'https://certificados.midudev.com/6b328504-03c6-4523-8ba8-ce9ad7868515.pdf',
  },
  {
    nombre: 'Visualización con Seaborn',
    emisor: 'DataCamp',
    detalle: '17 jun 2025 · 4 h',
    url: `${base}certificados/visualizacion-seaborn.pdf`,
  },
  {
    nombre: 'Análisis Exploratorio',
    emisor: 'DataCamp',
    detalle: '19 jun 2025 · 4 h',
    url: `${base}certificados/analisis-exploratorio.pdf`,
  },
  {
    nombre: 'Muestreo en Python',
    emisor: 'DataCamp',
    detalle: '22 jun 2025 · 4 h',
    url: `${base}certificados/muestreo-en-python.pdf`,
  },
  {
    nombre: 'Monitor de Redes e Infraestructura',
    emisor: 'UAO',
    detalle: 'Período 2025-1S',
    url: `${base}certificados/redes-infraestructura.pdf`,
  },
]
