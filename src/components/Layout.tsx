import Header from '../components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import XP from '../pages/XP'
import Contacto from '../pages/Contacto'
import Fotter from './Footer'
import Tren from './Tren'

function Layout() {
  return (
    <>
      <Header />
      <main className='center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<XP />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Tren/>
      <Fotter/>
    </>
  )
}
export default Layout;