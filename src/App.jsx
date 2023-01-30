import './App.css'
import freecodecampLogo from './img/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton'

function App() {

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodecampLogo} className='freecodecamp-logo' alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton> -</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton> =</Boton>
          <Boton>0</Boton>
          <Boton> . </Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <Boton>Clear</Boton>
        </div>
      </div>
    </div>
  )
}

export default App
