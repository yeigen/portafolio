import './css/Header.css'
import Icons from './Icons';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header>
            <nav>
                <h2 className='Yeigen'> <a href="/">YEIGEN</a></h2>
                <button className='hamburger'
                aria-expanded={isMenuOpen}
                aria-controls="main-nav-menu"
                aria-label='Menú'
                onClick={() => setIsMenuOpen(prev => !prev)}>
                    <span>Menu</span>

                </button>
                <div id="main-nav-menu" className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
                    <ul className="nav-links">
                        <li> <a href="/">Inicio</a></li>
                        <li> <a href="#experiencia">Experiencia</a></li>
                        <li> <a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <li> <Icons /></li>
            </nav>
        </header>
    );
}

export default Header;
