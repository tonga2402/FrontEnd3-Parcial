import { useState } from 'react'
import Card from './Card'
import Form from './Form';
import './styles/App.css'

function App() {
  
  const [descarga , setDescarga] = useState("")
  const [clase , setClase] = useState(false)

  const iniciarDescarga = (descarga) => {
    setDescarga(descarga)
    setClase(true)
  }
return (
  <>
    <h1>Descargar Sistema Operativo</h1>
    <Form iniciarDescarga={iniciarDescarga}/>
    <div className={clase ? 'open' : 'close'}>  
    <Card descarga={descarga}/>
    </div>
  </>
);

}
export default App;