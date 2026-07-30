import Modal from '../components/Modal';
import { experiencias, type Experiencia } from '../experiencias';
import yoGraduacion from '../assets/yo-graduacion-pequeno.png'
import { useState } from 'react';
import Line from '../components/LineSection'

function Proyectos() {

  const [seleccion, setSeleccion] = useState<Experiencia | null>(null)
  
  return (
    <section id='experiencia' className="full-section">
      <h1 className="title">EXPERIENCIA</h1>
      <div className='xp-img'>
        {Object.entries(experiencias).map(([key,exp]) => (
        <figure className='xp-item' key={key}>
            <img src={exp.img} alt={exp.alt} onClick={() => setSeleccion(exp)}/>
          <figcaption>{exp.caption}</figcaption>
        </figure>
        ))}
      </div>
      {seleccion && <Modal 
        titulo={seleccion.titulo} 
        texto={seleccion.texto} 
        fondo={seleccion.fondo}
        foto={seleccion.foto} 
        onClose={() => setSeleccion(null)} 
      />}
      <img className='yo-graduacion' src={yoGraduacion} alt="Yo Graduación" />
      <Line/>
    </section>
  )
}

export default Proyectos;
