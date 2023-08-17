import './styles/card.css'

function Card({descarga}) {
  return (
    <div className='divCard'>
      <h2>Hola! <span>{descarga.nombre}</span></h2>
      <h2><span>{descarga.sistemaOperativo}</span> ya se ha Descargado</h2>
    </div>
  )
}

export default Card
