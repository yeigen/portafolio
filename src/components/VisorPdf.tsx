import Dialogo from './Dialogo'

interface VisorPdfProps {
  onClose: () => void
  nombre: string
  url: string
  verificacion?: string
}

function VisorPdf({ onClose, nombre, url, verificacion }: VisorPdfProps) {
  return (
    <Dialogo onClose={onClose} ancho>
      <h2 id="modal-titulo" className="visor-titulo">{nombre}</h2>
      <iframe className="visor-pdf" src={`${url}#navpanes=0&view=FitH`} title={nombre} />
      <div className="visor-acciones">
        <a className="boton fantasma" href={url} target="_blank" rel="noopener noreferrer">
          Abrir en una pestaña
        </a>
        {verificacion && (
          <a className="boton fantasma" href={verificacion} target="_blank" rel="noopener noreferrer">
            Verificar certificado
          </a>
        )}
      </div>
    </Dialogo>
  )
}

export default VisorPdf
