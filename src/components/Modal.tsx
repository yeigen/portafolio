interface ModalProps {
  onClose: () => void
};


function Modal({onClose}: ModalProps){
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box">
        <h2>INFORMACION</h2>
      </div>
    </div>

  );
}

export default Modal;