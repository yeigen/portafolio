import Header from '../components/Header'
import Home from '../pages/Home'
import Fotter from './Footer'
import Tren from './Tren'

function Layout() {
  return (
    <>
      <Header />
      <main className='center'>
        <Home />
      </main>
      <Tren/>
      <Fotter/>
    </>
  )
}
export default Layout;