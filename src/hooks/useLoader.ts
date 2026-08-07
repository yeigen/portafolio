import { useEffect, useState } from 'react'

export type Fase = 'cargando' | 'saliendo' | 'listo'

export function useLoader(
  minimo = 2000,
  duracionSalida = 500,
) {
  const [fase, setFase] = useState<Fase>('cargando')

  useEffect(() => {
    let cancelado = false

    let idMinimo: ReturnType<typeof setTimeout> | undefined
    let idSalida: ReturnType<typeof setTimeout> | undefined

    let resolverCarga: (() => void) | undefined

    const carga = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve()
        return
      }

      resolverCarga = resolve
      window.addEventListener('load', resolverCarga, {
        once: true,
      })
    })

    const espera = new Promise<void>((resolve) => {
      idMinimo = setTimeout(resolve, minimo)
    })

    Promise.all([carga, espera]).then(() => {
      if (cancelado) return

      setFase('saliendo')

      idSalida = setTimeout(() => {
        if (!cancelado) {
          setFase('listo')
        }
      }, duracionSalida)
    })

    return () => {
      cancelado = true

      if (resolverCarga) {
        window.removeEventListener('load', resolverCarga)
      }

      if (idMinimo !== undefined) {
        clearTimeout(idMinimo)
      }

      if (idSalida !== undefined) {
        clearTimeout(idSalida)
      }
    }
  }, [minimo, duracionSalida])

  return fase
}