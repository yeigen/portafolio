import { useState } from 'react'
import Line from '../components/LineSection'
import VisorPdf from '../components/VisorPdf'
import { certificados } from '../Certificados'

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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="9" r="6" />
              <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
            </svg>
            <span className="certificado-emisor">{certificado.emisor}</span>
            <span className="certificado-nombre">{certificado.nombre}</span>
            <span className="certificado-detalle">{certificado.detalle}</span>
            <span className="certificado-ver">Ver certificado</span>
          </button>
        ))}
      </div>
      {abierto && (
        <VisorPdf nombre={abierto.nombre} url={abierto.url} onClose={() => setAbierto(null)} />
      )}
      <Line />
    </section>
  )
}

export default Certificados
