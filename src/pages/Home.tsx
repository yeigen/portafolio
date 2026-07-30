import yoImage from '../assets/yo-pixel-art.jpg'
import Certificados from './Certificados'
import Contacto from './Contacto'
import Proyectos from './XP'
import Line from '../components/LineSection'

function Home() {

  return (
    <div>
        <section id="inicio" className="full-section">
            <h1 className="title">PORTAFOLIO</h1>
        <div className='section-body'>
            <p>Ya tenia uno con <a href="https://effortless-raindrop-add9e4.netlify.app/" target="_blank" rel="noopener noreferrer">Astro</a> pero me dio por hacer uno con React</p>
            <div className='yo-image'>
                <a href="https://www.linkedin.com/in/gabriel-eduardo-martinez-martinez-a12068267/" target="_blank" rel="noopener noreferrer"><img src={yoImage} alt="yo" /></a>
            </div>
            <p className='name'>YEIGEN</p>
        </div>
        <Line/>
        </section>
        <Proyectos/>
        <Certificados/>
        <Contacto/>
    </div>
  )
}

export default Home