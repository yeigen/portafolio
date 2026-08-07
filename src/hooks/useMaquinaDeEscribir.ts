import { useEffect, useState } from 'react'

type EstadoEscritura = {
  texto: string
  visible: string
}

export function useMaquinaDeEscribir(
  texto: string, 
  duracion = 2000,
) {
  
  const [estado, setEstado] = useState<EstadoEscritura>({
    texto: '',
    visible: '',
  })

  const reducirMovimiento =
  typeof window !== 'undefined' &&
  window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  useEffect(() => {
    if (!texto || reducirMovimiento || duracion <= 0) {
      return
    }

  let frame = 0
  let inicio: number | null = null

  const tick = (ahora: number) => {
      if (inicio === null) {
        inicio = ahora
      }

      const progreso = Math.min(
        (ahora - inicio) / duracion,
        1,
      )

      setEstado({
        texto,
        visible: texto.slice(
          0,
          Math.ceil(progreso * texto.length),
        ),
      })

      if (progreso < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [texto, duracion, reducirMovimiento])

  if (!texto) {
    return ''
  }

  if (reducirMovimiento || duracion <= 0) {
    return texto
  }

  if (estado.texto !== texto) {
    return ''
  }

  return estado.visible
}