import Line from '../components/LineSection'
import { icons } from '../icons'

const certificado = icons.certificado

const certificados = [
  { nombre: 'Certificado 1', url: '' },
  { nombre: 'Certificado 2', url: '' },
  { nombre: 'Certificado 3', url: '' },
  { nombre: 'Certificado 4', url: '' },
  { nombre: 'Certificado 5', url: '' },
  { nombre: 'Certificado 6', url: '' },
  { nombre: 'Certificado 7', url: '' },
  { nombre: 'Certificado 8', url: '' },
]

function Certificados() {

  return (
    <section id="certificados" className="full-section">
        <h1 className="title">CERTIFICADOS</h1>
        <div className='section-body'>
          <div className='grilla-certificados'>
            {'paths' in certificado && certificados.map(({ nombre, url }) => (
              <a
                key={nombre}
                href={url || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className='certificado-item'>
                  <svg
                    viewBox={certificado.viewBox}
                    fill={certificado.fill}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform={certificado.transform}>
                      {certificado.paths.map((p, j) => (
                        <path key={j} d={p.d} fill={p.fill} />
                      ))}
                    </g>
                  </svg>
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
