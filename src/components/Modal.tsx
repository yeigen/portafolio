import { useMaquinaDeEscribir } from '../hooks/useMaquinaDeEscribir'
import Dialogo from './Dialogo'

interface ModalProps {
  onClose: () => void
  titulo: string
  texto: string
  foto: string
}

const parrafos = (t: string) =>
  t.split(/\n\s*\n/).map((p, i) => (
    <p className="modal-texto" key={i}>{p}</p>
  ))

function Modal({ onClose, titulo, texto, foto }: ModalProps) {
  const textoVisible = useMaquinaDeEscribir(texto, 2000)

  return (
    <Dialogo onClose={onClose}>
      <div className="modal-cuerpo">
        <img className="modal-foto imagen-neon" src={foto} alt={titulo} />
        <div className="modal-contenido">
          <h2 id="modal-titulo">{titulo}</h2>
          <div className="escritura">
            <div className="escritura-fantasma" aria-hidden="true">{parrafos(texto)}</div>
            <div>{parrafos(textoVisible)}</div>
          </div>
        </div>
      </div>
    </Dialogo>
  )
}

export default Modal
