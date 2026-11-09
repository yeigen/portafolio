import Certificados from './Certificados'
import Contacto from './Contacto'
import Proyectos from './XP'
import Line from '../components/LineSection'
import yoImage from '../assets/yo-pixel-art.jpg'
import ciudad from '../assets/cyber/ciudad.webp'
import luce from '../assets/cyber/luce.webp'

function Home() {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-texto">
          <p className="kicker">PORTAFOLIO</p>
          <h1 className="hero-titulo">YEIGEN</h1>
          <p>
            Ya tenia uno con{' '}
            <a href="https://effortless-raindrop-add9e4.netlify.app/" target="_blank" rel="noopener noreferrer">Astro</a>{' '}
            pero me dio por hacer uno con React
          </p>
          <div className="acciones">
            <a className="boton" href="#experiencia">Ver experiencia</a>
            <a className="boton fantasma" href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="escena">
          <div className="escena-tarjeta">
            <img className="escena-ciudad" src={ciudad} alt="" />
            <a
              className="escena-perfil"
              href="https://www.linkedin.com/in/gabriel-eduardo-martinez-martinez-a12068267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imagen-neon" src={yoImage} alt="Yo" />
            </a>
            <img className="escena-gif" src={luce} alt="" />
          </div>
        </div>
        <Line />
      </section>
      <Proyectos />
      <Certificados />
      <Contacto />
    </>
  )
}

export default Home
