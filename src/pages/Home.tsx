import yoImage from '../assets/yo_xd.png'
import Contacto from './Contacto'
import Proyectos from './XP'

function Home() {

  return (
    <div>
        <section id="inicio" className="full-section">
            <h1 className="title">PORTAFOLIO</h1>
            <p>Ya tenia uno con <a href="https://effortless-raindrop-add9e4.netlify.app/">Astro</a> pero me dio por hacer uno con React</p>
        <div className='yo-image'>
            <img src={yoImage} alt="yo" />
        </div>
            <p className='name'>YEIGEN</p>
        </section>
        <Proyectos/>
        <Contacto/>
    </div>
  )
}

export default Home