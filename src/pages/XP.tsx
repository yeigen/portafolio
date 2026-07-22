import Modal from '../components/Modal';
import { experiencias, type Experiencia } from '../experiencias';
import { useState } from 'react';

function Proyectos() {

  const [seleccion, setSeleccion] = useState<Experiencia | null>(null)
  
  return (
    <section id='experiencia' className="full-section">
    <div>
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
        onClose={() => setSeleccion(null)} 
      />}
      </div>
    </section>
  )
}

export default Proyectos;
