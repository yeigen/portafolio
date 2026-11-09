import { useEffect, useRef, type ReactNode } from 'react'

interface DialogoProps {
  onClose: () => void
  ancho?: boolean
  children: ReactNode
}

function Dialogo({ onClose, ancho, children }: DialogoProps) {
  const dialogo = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogo.current?.showModal()
  }, [])

  return (
    <dialog
      ref={dialogo}
      className={ancho ? 'modal-box modal-ancho' : 'modal-box'}
      aria-labelledby="modal-titulo"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogo.current) dialogo.current?.close()
      }}
    >
      <div className="modal-interior">
        <button
          type="button"
          className="modal-cerrar"
          aria-label="Cerrar"
          onClick={() => dialogo.current?.close()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </dialog>
  )
}

export default Dialogo
