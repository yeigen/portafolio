import Line from '../components/LineSection'
import Icon from '../components/Icon'

function Contacto() {
  return (
    <section id="contacto" className="full-section">
      <h1 className="title">CONTACTO</h1>
      <div className='section-body'>
        <div className='background-logo'>
        <a href="https://www.linkedin.com/in/gabriel-eduardo-martinez-martinez-a12068267/"><Icon name="linkedin" className="icono-contacto"/></a>
        </div>
        <a href="mailto:gabriel.dev.edwards@gmail.com"><h2 className="correo">gabriel.dev.edwards@gmail.com</h2></a>
      </div>
      <Line />
    </section>
  );
}

export default Contacto;
