import { useMaquinaDeEscribir } from '../hooks/useMaquinaDeEscribir'

interface ModalProps {
  onClose: () => void
  titulo: string
  texto: string
  fondo: string
  foto?: string
};


function Modal({ onClose, titulo, texto, fondo, foto }: ModalProps) {
  const textoVisible = useMaquinaDeEscribir(texto, 2000)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-stage">
        {foto && <img className="modal-foto" src={foto} alt={titulo} />}
        {foto && <img className="modal-foto-derecha" src={foto} alt={titulo} />}
        <div className="modal-box" style={{ '--modal-img': `url("${fondo}")` } as React.CSSProperties}>
          <h2>{titulo}</h2>
          <p className="modal-texto">{textoVisible}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;