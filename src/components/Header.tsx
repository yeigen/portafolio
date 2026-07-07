interface HeaderProps {

}

import './css/Header.css'
import Icons from './Icons';

function Header ({}: HeaderProps){
    return (
        <header>
            <nav>
                <h2> <a href="/">YEIGEN</a></h2>
                <ul>
                    <li>Inicio</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                    <li> <Icons /></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;