interface ModalProps {
  onClose: () => void
  titulo: string
  texto: string
  fondo: string
};


function Modal({onClose, titulo, texto, fondo}: ModalProps){
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box"
      style={{'--modal-img': `url("${fondo}")` } as React.CSSProperties}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </div>

  );
}

export default Modal;