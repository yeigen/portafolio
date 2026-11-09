import Abodi from './assets/experiencia/abodi.png'
import UAO from './assets/experiencia/logo-uao.png'
import Indigo from './assets/experiencia/indigo-logo.jpeg'
import AbodiPixel from './assets/abodi-pixel.jpg'
import IndigoPixel from './assets/indigo-pixel.jpg'


export interface Experiencia {
    img: string
    foto: string
    alt: string
    caption: string
    titulo: string
    texto: string
    enlace?: string
}

export const experiencias: Record<string, Experiencia> = {
    Abodi: {
        img: Abodi,
        foto: AbodiPixel,
        alt: "Abodi-Proyecto",
        caption: "Proyecto ABODI",
        titulo: "ABODI",
        texto: `ABODI es el proyecto donde termina aterrizando todo lo que estudio. Empezo como una idea pequeña y
        se convirtio en el lugar donde pruebo cada cosa nueva que aprendo.

        Me toco pasar por el diseño, el frontend y el despliegue, asi que fue la primera vez que llevé
        un proyecto completo de principio a fin y no solo una parte suelta.`,
        enlace: "https://abodiapp.com",
    },
    UAO: {
        img: UAO,
        foto: UAO,
        alt: "UAO",
        caption: "Monitor de Redes e Infraestructura",
        titulo: "MONITOR DE REDES",
        texto: `Como monitor de redes e infraestructura acompañé la operacion del dia a dia: revisar equipos,
        atender reportes y dejar documentado lo que iba pasando.

        Fue el trabajo que me enseño que la infraestructura casi nunca falla de forma obvia, y que
        documentar bien termina valiendo tanto como arreglar el problema.`,
    },
    Indigo: {
        img: Indigo,
        foto: IndigoPixel,
        alt: "Indigo",
        caption: "Junior Developer L1",
        titulo: "JUNIOR DEVELOPER",
        texto: `Mi primer rol formal como desarrollador. Entré a Junior Developer de nivel 1, atendiendo
        incidencias y haciendo ajustes sobre codigo que no habia escrito yo.

        Aprendi a leer proyectos ajenos, a preguntar antes de tocar, y a que un cambio pequeño y
        entendido vale mas que uno grande y apurado.`
}
}
