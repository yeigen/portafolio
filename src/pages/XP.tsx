import Abodi from '../assets/experiencia/abodi.png'
import logo from '../assets/experiencia/logo-uao.png'
import Indigo from '../assets/experiencia/indigo-logo.jpeg'

function Proyectos() {
  return (
    <div>
      <h1 className="title">EXPERIENCIA</h1>
      <div className='xp-img'>
        <figure className='xp-item'>
          <a href="https://abodiapp.com"><img src={Abodi} alt="Abodi-Proyecto"/></a>
          <figcaption>Proyecto ABODI</figcaption>
        </figure>

        <figure className='xp-item'>
          <a href="https://drive.google.com/file/d/1bdwi5OxVEL2LPY-2pmwOSpAiRUuXpqmV/view?usp=drive_link"><img src={logo} alt="Indigo"/></a>
          <figcaption>Monitor de Redes e Infraestructura</figcaption>
      </figure>

      <figure className='xp-item'>
        <a href="https://indigo.tech/"><img src={Indigo} alt="Indigo"/></a>
        <figcaption>Junior Developer L1</figcaption>
      </figure>
        
      </div>
    </div>
  )
}

export default Proyectos;
