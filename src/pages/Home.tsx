import yoImage from '../assets/yo_xd.png'

function Home() {

  return (
    <div className="center">
        <div>
            <h1 className="title">PORTAFOLIO</h1>
            <p>Ya tenia uno con Astro pero me dio por hacer uno con React</p>
        <div className='yo-image'>
            <img src={yoImage} alt="yo" />
        </div>
            <p className='name'>YEIGEN</p>
        </div>
    </div>   
  )
}

export default Home