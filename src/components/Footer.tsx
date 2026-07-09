import './css/Header.css'
import Icons from './Icons';
import { Link } from 'react-router-dom';

function Fotter() {
    return (
        <header className='fotter'>
            <h2>YEIGEN</h2>
                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/experiencia">Experiencia</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                </ul>
            <Icons/>
        </header>
    );
}

export default Fotter;
