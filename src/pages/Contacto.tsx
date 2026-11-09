import Line from '../components/LineSection'
import Icon from '../components/Icon'
import { redes } from '../redes'
import rainbow from '../assets/cyber/rainbow.webp'

const principales = redes.filter(({ key }) => ['linkedin', 'youtube', 'instagram'].includes(key))

function Contacto() {
  return (
    <section id="contacto" className="seccion">
      <h2 className="title">CONTACTO</h2>
      <div className="contacto-cuerpo">
        <div className="contacto-redes">
          {principales.map(({ key, href, nombre }) => (
            <a
              key={key}
              className="contacto-logo"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nombre}
            >
              <Icon name={key} className="icono-contacto" />
            </a>
          ))}
        </div>
        <a className="boton fantasma correo" href="mailto:gabriel.dev.edwards@gmail.com">
          gabriel.dev.edwards@gmail.com
        </a>
        <img className="contacto-gif" src={rainbow} alt="" loading="lazy" />
      </div>
      <Line />
    </section>
  )
}

export default Contacto
