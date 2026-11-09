import { useEffect, useState } from 'react'
import balanceo from '../assets/cyber/balanceo.webp'

function Balanceo() {
  const [clave, setClave] = useState(0)

  useEffect(() => {
    const alHacerClic = (e: MouseEvent) => {
      if ((e.target as Element).closest('.boton, .nav-links a, .logo, .contacto-logo')) {
        setClave((c) => c + 1)
      }
    }
    document.addEventListener('click', alHacerClic)
    return () => document.removeEventListener('click', alHacerClic)
  }, [])

  useEffect(() => {
    if (!clave) return
    const id = setTimeout(() => setClave(0), 2200)
    return () => clearTimeout(id)
  }, [clave])

  return clave ? <img key={clave} className="balanceo" src={balanceo} alt="" /> : null
}

export default Balanceo
