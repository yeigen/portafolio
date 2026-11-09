import './css/Loader.css'
import type { Fase } from '../hooks/useLoader'
import astronauta from '../assets/cyber/astronauta.webp'

type LoaderProps = {
  fase: Fase
}

function Loader({ fase }: LoaderProps) {
  return (
    <div
      className={fase === 'saliendo' ? 'loader saliendo' : 'loader'}
      role='status'
      aria-live='polite'
    >
      <img className='loader-astronauta' src={astronauta} alt='' />
      <span className='loader-texto'>Cargando</span>
    </div>
  );
}

export default Loader;
