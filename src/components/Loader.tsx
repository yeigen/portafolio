import './css/Loader.css'
import type { Fase } from '../hooks/useLoader'

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
      <span className='loader-texto'>Cargando</span>

      <div data-js='astro' className='astronaut' aria-hidden='true'>
        <div className='head'></div>
        <div className='arm arm-left'></div>
        <div className='arm arm-right'></div>
        <div className='body'>
          <div className='panel'></div>
        </div>
        <div className='leg leg-left'></div>
        <div className='leg leg-right'></div>
        <div className='schoolbag'></div>
      </div>
    </div>
  );
}

export default Loader;