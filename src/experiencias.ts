import Abodi from './assets/experiencia/abodi.png'
import UAO from './assets/experiencia/logo-uao.png'
import Indigo from './assets/experiencia/indigo-logo.jpeg'

export interface Experiencia {
    img: string
    alt: string
    caption: string
    titulo: string
    texto: string
}

export const experiencias: Record<string, Experiencia> = {
    Abodi: {
        img: Abodi,
        alt: "Abodi-Proyecto",
        caption: "Proyecto ABODI",
        titulo: "ABODI",
        texto: "sff32874278njdf",
    },
    UAO: {
        img: UAO,
        alt: "UAO",
        caption: "Monitor de Redes e Infraestructura",
        titulo: "MONITOR DE REDES",
        texto: "sfshjdhjasdbmsf njsuh",
    },
    Indigo: {
        img: Indigo,
        alt: "Indigo",
        caption: "Junior Developer L1",
        titulo: "JUNIOR DEVELOPER",
        texto: "fskjduh iy728724",
}

}
