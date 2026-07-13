import './css/Header.css'
import Icons from './Icons';

function Fotter() {
    return (
        <header className='fotter'>
            <h2 className='Yeigen'> <a href="/">YEIGEN</a></h2>
                <ul className="nav-links">
                    <li> <a href="/">Inicio</a></li>
                    <li> <a href="#experiencia">Experiencia</a></li>
                    <li> <a href="#contacto">Contacto</a></li>
                </ul>
            <Icons/>
        </header>
    );
}

export default Fotter;
