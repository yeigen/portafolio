interface ModalProps {
  onClose: () => void
  titulo: string
  texto: string
};


function Modal({onClose, titulo, texto}: ModalProps){
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </div>

  );
}

export default Modal;