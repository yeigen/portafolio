import './css/Header.css'
import Icons from './Icons';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header>
            <nav>
                <h2 className='Yeigen'> <Link to="/">YEIGEN</Link></h2>
                <button className='hamburger'
                aria-expanded={isMenuOpen}
                aria-controls="main-nav-menu"
                aria-label='Menú'
                onClick={() => setIsMenuOpen(prev => !prev)}>
                    <span>Menu</span>

                </button>
                <div id="main-nav-menu" className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
                    <ul>
                        <li> <Link to="/">Inicio</Link></li>
                        <li> <Link to="/experiencia">Experiencia</Link></li>
                        <li> <Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <li> <Icons /></li>
            </nav>
        </header>
    );
}

export default Header;
