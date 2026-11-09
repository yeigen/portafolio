import './css/Header.css'
import Icons from './Icons'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cerrar = () => setIsMenuOpen(false)

  return (
    <header>
      <nav aria-label="Principal">
        <a className="logo" href="#inicio" onClick={cerrar}>YEIGEN</a>
        <button
          type="button"
          className="hamburger"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menú
        </button>
        <div id="main-nav-menu" className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <div className="nav-menu-interior">
            <ul className="nav-links">
              <li><a href="#inicio" onClick={cerrar}>Inicio</a></li>
              <li><a href="#experiencia" onClick={cerrar}>Experiencia</a></li>
              <li><a href="#certificados" onClick={cerrar}>Certificados</a></li>
              <li><a href="#contacto" onClick={cerrar}>Contacto</a></li>
            </ul>
            <Icons />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
