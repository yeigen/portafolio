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
        texto: `ABODI es un proyecto real: tiene clientes, está desplegado y funciona las 24 horas, todos los días.

        Me encargué del recorrido completo, desde el diseño y el frontend hasta el despliegue. Es el primer proyecto que llevo de principio a fin, y hoy está en producción.`,
        enlace: "https://abodiapp.com",
    },
    UAO: {
        img: UAO,
        foto: UAO,
        alt: "UAO",
        caption: "Monitor de Redes e Infraestructura",
        titulo: "MONITOR DE REDES",
        texto: `Como monitor de redes e infraestructura acompañé la operación del día a día: revisar equipos,
        atender reportes y dejar documentado lo que iba pasando.

        Fue el trabajo que me enseñó que la infraestructura casi nunca falla de forma obvia, y que
        documentar bien termina valiendo tanto como arreglar el problema.`,
    },
    Indigo: {
        img: Indigo,
        foto: IndigoPixel,
        alt: "Indigo",
        caption: "Junior Developer L1",
        titulo: "JUNIOR DEVELOPER",
        texto: `Mi primer rol formal como desarrollador. Entré a Junior Developer de nivel 1, atendiendo
        incidencias y haciendo ajustes sobre código que no había escrito yo.

        Aprendí a leer proyectos ajenos, a preguntar antes de tocar, y a que un cambio pequeño y
        entendido vale más que uno grande y apurado.`
}
}
