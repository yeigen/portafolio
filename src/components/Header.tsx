interface HeaderProps {

}
import './css/Header.css'
import Icons from './Icons';
import {Link} from 'react-router-dom';

function Header ({}: HeaderProps){
    return (
        <header>
                <nav>
                <h2> <Link to="/">YEIGEN</Link></h2>

                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/proyectos">Proyectos</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                    <li> <Icons /></li>
                </ul>
                </nav>
        </header>
    );
}

export default Header;