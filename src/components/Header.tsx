import './css/Header.css'
import Icons from './Icons';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <h2 className='Yeigen'> <Link to="/">YEIGEN</Link></h2>
                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/experiencia">Experiencia</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                </ul>
                <li> <Icons /></li>
            </nav>
        </header>
    );
}

export default Header;
