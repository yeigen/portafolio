import Abodi from '../assets/experiencia/abodi.png'
import logo from '../assets/experiencia/logo-uao.png'
import Indigo from '../assets/experiencia/indigo-logo.jpeg'
import Modal from '../components/Modal';

import { useState } from 'react';

function Proyectos() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <section id='experiencia' className="full-section">
    <div>
      <h1 className="title">EXPERIENCIA</h1>
      <div className='xp-img'>
        <figure className='xp-item'>
            <img src={Abodi} alt="Abodi-Proyecto" onClick={() => setIsOpen(true)}/>
          <figcaption>Proyecto ABODI</figcaption>
        </figure>

        <figure className='xp-item'>
          <img src={logo} alt="Indigo" onClick={() => setIsOpen(true)}/>
          <figcaption>Monitor de Redes e Infraestructura</figcaption>
      </figure>

      <figure className='xp-item'>
        <img src={Indigo} alt="Indigo" onClick={() => setIsOpen(true)}/>
        <figcaption>Junior Developer L1</figcaption>
      </figure>
        
      </div>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
    </section>
  )
}

export default Proyectos;
