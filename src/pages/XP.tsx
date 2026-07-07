import Abodi from '../assets/experiencia/abodi.png'
import XP from '../assets/experiencia/logo-uao.png'
import Indigo from '../assets/experiencia/indigo-logo.jpeg'

function Proyectos() {
  return (
    <div>
      <h1 className="title">EXPERIENCIA</h1>
      <div className='xp-img'>
      <img src={Abodi} alt="Abodi-Proyecto"/>
      <img src={XP} alt="Monitor UAO"/>
      <img src={Indigo} alt="Indigo"/>
      </div>
    </div>
  )
}

export default Proyectos;
