import Dialogo from './Dialogo'

interface VisorPdfProps {
  onClose: () => void
  nombre: string
  url: string
}

function VisorPdf({ onClose, nombre, url }: VisorPdfProps) {
  return (
    <Dialogo onClose={onClose} ancho>
      <h2 id="modal-titulo" className="visor-titulo">{nombre}</h2>
      <iframe className="visor-pdf" src={`${url}#navpanes=0&view=FitH`} title={nombre} />
      <a className="boton fantasma" href={url} target="_blank" rel="noopener noreferrer">
        Abrir en una pestaña
      </a>
    </Dialogo>
  )
}

export default VisorPdf
