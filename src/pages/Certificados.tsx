import { useState } from 'react'
import Line from '../components/LineSection'
import VisorPdf from '../components/VisorPdf'
import { certificados } from '../Certificados'
import gwen from '../assets/cyber/gwen.webp'

function Certificados() {
  const [abierto, setAbierto] = useState<(typeof certificados)[number] | null>(null)

  return (
    <section id="certificados" className="seccion">
      <h2 className="title">CERTIFICADOS</h2>
      <div className="grilla-certificados">
        {certificados.map((certificado) => (
          <button
            type="button"
            key={certificado.nombre}
            className="certificado-item tarjeta revelar"
            onClick={() => setAbierto(certificado)}
          >
            <span className="certificado-logo" style={{ background: certificado.logoFondo, '--alto': certificado.logoAlto } as React.CSSProperties}>
              <img src={certificado.logo} alt="" loading="lazy" />
            </span>
            <span className="certificado-emisor">{certificado.emisor}</span>
            <span className="certificado-nombre">{certificado.nombre}</span>
            <span className="certificado-detalle">{certificado.detalle}</span>
            <span className="certificado-ver">Ver certificado</span>
          </button>
        ))}
      </div>
      {abierto && (
        <VisorPdf nombre={abierto.nombre} url={abierto.url} verificacion={abierto.verificacion} onClose={() => setAbierto(null)} />
      )}
      <img className="decorativo gwen" src={gwen} alt="" loading="lazy" />
      <Line />
    </section>
  )
}

export default Certificados
