import { useEffect, useState } from "react"

export type Fase = 'cargando' | 'saliendo' | 'listo'

export function useLoader(minimo = 2000, duracionSalida = 500) {
  const [fase, setFase] = useState<Fase>('cargando')

  useEffect(() => {
    let vivo = true
    let idMinimo: ReturnType<typeof setTimeout>
    let idSalida: ReturnType<typeof setTimeout>

    const carga = new Promise<void>(resolve => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', () => resolve(), { once: true })
    })

    const espera = new Promise<void>(resolve => {
      idMinimo = setTimeout(resolve, minimo)
    })

    Promise.all([carga, espera]).then(() => {
      if (!vivo) return

      setFase('saliendo')
      idSalida = setTimeout(() => {
        if (vivo) setFase('listo')
      }, duracionSalida)
    })

    return () => {
      vivo = false
      clearTimeout(idMinimo)
      clearTimeout(idSalida)
    }
  }, [minimo, duracionSalida])

  return fase
}
