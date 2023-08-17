import { useState } from 'react'
import './styles/form.css'

function Form({iniciarDescarga}) {

const [nombre , setNombre] = useState("")
const [sistemaOperativo , setSistemaOperativo] = useState("")
const [imputError, setImputError] = useState ("")




const handlerNombre = (e) => {
  const value = e.target.value
  setNombre(value)
}


const handlerSO = (e) => {
  const value = e.target.value
  setSistemaOperativo(value)
}

const handlerSubmit = (e) => {
  e.preventDefault();

  if(nombre.trim().length < 3 || sistemaOperativo.trim().length < 6){
    return setImputError("Por favor chequea que la información sea correcta")
  }else{
    setImputError("")
    iniciarDescarga({nombre,sistemaOperativo})
  }
    setNombre("");
    setSistemaOperativo("")
}

return (
  <>
    <div >
      
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={handlerNombre}
        />
        <input
          type="text"
          placeholder="Sistema Operativo"
          value={sistemaOperativo}
          onChange={handlerSO}
        />
        <button type="submit">Descargar</button>

        <label>
          <div className='error'>{imputError}</div>
        </label>
      </form>
    </div>
  </>
);

}
export default Form;