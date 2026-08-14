import AnalistaDatos from "./assets/certificados/analista-de-datos.webp"
import DataEngineer from "./assets/certificados/data-engineer.webp"
import PythonCero from "./assets/certificados/python-desde-cero-midudev.webp"
import Seaborn from "./assets/certificados/visualizacion-seaborn.webp"
import AnalisisExploratorio from "./assets/certificados/analisis-exploratorio.webp"
import Muestreo from "./assets/certificados/muestreo-python.webp"

const base = import.meta.env.BASE_URL

type Certificado = {
  nombre: string
  url: string
  foto?: string
}

export const certificados: Certificado[] = [
  { nombre: 'Analista de Datos',
    url: `${base}certificados/analista-de-datos.pdf`,
    foto: AnalistaDatos,
  },
  { nombre: 'Ingeniería de Datos',
    url: `${base}certificados/ingenieria-de-datos.pdf`,
    foto: DataEngineer,
  },
  { nombre: 'Python desde Cero',
    url: `${base}certificados/python-desde-cero.pdf`,
    foto: PythonCero,
  },
  { nombre: 'Visualización con Seaborn',
    url: `${base}certificados/visualizacion-seaborn.pdf`,
    foto: Seaborn,
  },
  { nombre: 'Análisis Exploratorio',
    url: `${base}certificados/analisis-exploratorio.pdf`,
    foto: AnalisisExploratorio,
  },
  { nombre: 'Muestreo en Python',
    url: `${base}certificados/muestreo-en-python.pdf`,
    foto: Muestreo,
  },
]
