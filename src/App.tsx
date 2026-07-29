import './App.css'
import Layout from './components/Layout'
import Loader from './components/Loader'
import { useLoader } from './hooks/useLoader'

function App() {
  const fase = useLoader(2000, 500)

  return (
    <>
      {fase !== 'listo' && <Loader fase={fase} />}
      <Layout/>
    </>
  )
}

export default App
