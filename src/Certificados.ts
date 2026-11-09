import datacamp from './assets/logos/datacamp.png'
import midudev from './assets/logos/midudev.webp'
import uao from './assets/experiencia/logo-uao.png'

const base = import.meta.env.BASE_URL

type Certificado = {
  nombre: string
  emisor: string
  detalle: string
  url: string
  verificacion?: string
  logo: string
  logoFondo: string
  logoAlto: string
}

export const certificados: Certificado[] = [
  {
    nombre: 'Analista de Datos',
    emisor: 'DataCamp',
    logo: datacamp,
    logoFondo: '#ffffff',
    logoAlto: '2.5rem',
    detalle: '6 jul 2025',
    url: `${base}certificados/analista-de-datos.pdf`,
  },
  {
    nombre: 'Ingeniería de Datos',
    emisor: 'DataCamp',
    logo: datacamp,
    logoFondo: '#ffffff',
    logoAlto: '2.5rem',
    detalle: '13 jul 2025 · 42 h',
    url: `${base}certificados/ingenieria-de-datos.pdf`,
  },
  {
    nombre: 'Python desde Cero',
    emisor: 'midudev',
    logo: midudev,
    logoFondo: 'transparent',
    logoAlto: '4rem',
    detalle: 'Curso completo',
    url: `${base}certificados/python-desde-cero.pdf`,
    verificacion: 'https://certificados.midudev.com/6b328504-03c6-4523-8ba8-ce9ad7868515.pdf',
  },
  {
    nombre: 'Visualización con Seaborn',
    emisor: 'DataCamp',
    logo: datacamp,
    logoFondo: '#ffffff',
    logoAlto: '2.5rem',
    detalle: '17 jun 2025 · 4 h',
    url: `${base}certificados/visualizacion-seaborn.pdf`,
  },
  {
    nombre: 'Análisis Exploratorio',
    emisor: 'DataCamp',
    logo: datacamp,
    logoFondo: '#ffffff',
    logoAlto: '2.5rem',
    detalle: '19 jun 2025 · 4 h',
    url: `${base}certificados/analisis-exploratorio.pdf`,
  },
  {
    nombre: 'Monitor de Redes e Infraestructura',
    emisor: 'UAO',
    logo: uao,
    logoFondo: '#ffffff',
    logoAlto: '4rem',
    detalle: 'Período 2025-1S',
    url: `${base}certificados/redes-infraestructura.pdf`,
  },
]
