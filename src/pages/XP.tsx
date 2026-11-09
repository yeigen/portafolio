import Modal from '../components/Modal'
import { experiencias, type Experiencia } from '../experiencias'
import { useState } from 'react'
import Line from '../components/LineSection'

function Proyectos() {
  const [seleccion, setSeleccion] = useState<Experiencia | null>(null)

  return (
    <section id="experiencia" className="seccion">
      <h2 className="title">EXPERIENCIA</h2>
      <div className="xp-grid">
        {Object.entries(experiencias).map(([key, exp]) => (
          <button
            type="button"
            key={key}
            className={`xp-card xp-${key.toLowerCase()} tarjeta revelar`}
            onClick={() => setSeleccion(exp)}
          >
            <img className="xp-img imagen-neon" src={exp.img} alt={exp.alt} />
            <span className="xp-caption">{exp.caption}</span>
          </button>
        ))}
      </div>
      {seleccion && (
        <Modal
          titulo={seleccion.titulo}
          texto={seleccion.texto}
          foto={seleccion.foto}
          enlace={seleccion.enlace}
          onClose={() => setSeleccion(null)}
        />
      )}
      <Line />
    </section>
  )
}

export default Proyectos
