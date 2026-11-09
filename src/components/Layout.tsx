import Header from '../components/Header'
import Home from '../pages/Home'
import Balanceo from './Balanceo'
import Footer from './Footer'
import Tren from './Tren'


function Layout() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Tren/>
      <Footer/>
      <Balanceo />
    </>
  )
}
export default Layout;