import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import XP from './pages/XP'
import Contacto from './pages/Contacto'

function App() {

  return (
    <div className='app-main'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="experiencia" element={<XP />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
