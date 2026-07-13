interface ModalProps {
  onClose: () => void
};


function Modal({onClose}: ModalProps){
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box">
      </div>

    </div>

  );
}

export default Modal;