import './App.css'
import yoImage from './assets/yo_xd.png'
import Header from './components/Header'

function App() {

  return (
    <div className='app-main'>
      <Header /> 
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>PORTAFOLIO</h1>
          <p>
            Ya tenia uno con Astro pero me dio por hacer uno con React
          </p>
          <div className='yo-image'>
          <img src={yoImage} alt="yo" />
          </div>
          <p className='name'>YEIGEN</p>
        </div>
      </section>

      <section id="next-steps">
        <div id="docs">
        </div>
      </section>

      <section id="spacer"></section>
    </div>
  )
}

export default App
