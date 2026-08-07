import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from './Footer'
import Tren from './Tren'


function Layout() {
  return (
    <>
      <Header />
      <main className='center'>
        <Home />
      </main>
      <Tren/>
      <Footer/>
    </>
  )
}
export default Layout;