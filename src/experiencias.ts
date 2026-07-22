import Abodi from './assets/experiencia/abodi.png'
import UAO from './assets/experiencia/logo-uao.png'
import Indigo from './assets/experiencia/indigo-logo.jpeg'
import Erased from './assets/erased-pixel-art.png'
import Johan from './assets/johan-moster.png'

export interface Experiencia {
    img: string
    alt: string
    fondo: string
    caption: string
    titulo: string
    texto: string
}

export const experiencias: Record<string, Experiencia> = {
    Abodi: {
        img: Abodi,
        alt: "Abodi-Proyecto",
        fondo: Erased,
        caption: "Proyecto ABODI",
        titulo: "ABODI",
        texto: "sff32874278njdf",
    },
    UAO: {
        img: UAO,
        alt: "UAO",
        fondo: "https://i.redd.it/wc6d3yqxt2981.jpg",
        caption: "Monitor de Redes e Infraestructura",
        titulo: "MONITOR DE REDES",
        texto: "sfshjdhjasdbmsf njsuh",
    },
    Indigo: {
        img: Indigo,
        alt: "Indigo",
        fondo: Johan,
        caption: "Junior Developer L1",
        titulo: "JUNIOR DEVELOPER",
        texto: "fskjduh iy728724",
}

}
