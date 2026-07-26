import { useEffect, useState } from 'react'

export function useMaquinaDeEscribir(texto: string, duracion = 2000) {
  const [visible, setVisible] = useState('')

  useEffect(() => {
    if (!texto) {
      setVisible('')
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(texto)
      return
    }

    setVisible('')

    let frame = 0
    let inicio: number | null = null

    const tick = (ahora: number) => {
      if (inicio === null) inicio = ahora

      const progreso = Math.min((ahora - inicio) / duracion, 1)
      setVisible(texto.slice(0, Math.ceil(progreso * texto.length)))

      if (progreso < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [texto, duracion])

  return visible
}
