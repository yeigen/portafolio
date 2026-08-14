import Line from '../components/LineSection'
import { certificados } from '../Certificados';

function Certificados() {

  return (
    <section id="certificados" className="full-section">
        <h1 className="title">CERTIFICADOS</h1>
        <div className='section-body'>
          <div className='grilla-certificados'>
            {certificados.map(({ foto, nombre, url }) => (
              <a
                key={nombre}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className='certificado-item'>
                  {foto ? <img src={foto} alt={nombre} loading="lazy" width={300} height={150} /> : <div className="foto-certificado-item" />}
                  <figcaption>{nombre}</figcaption>
                </figure>
              </a>
            ))}
          </div>
        </div>
        <Line/>
    </section>
  )
}

export default Certificados;
