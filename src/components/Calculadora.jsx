import React, { useState } from 'react'
import './Calculadora.css'
import Botao from './Botao'


const Calculadora = ({CalcImc}) => {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")

  const deleteBox = (e) => {
    e.preventDefault()
    setAltura("")
    setPeso("")
  }
  

  return (
    <div className="Calculadora">  
      <form>
        <h2>Calculadora de IMC</h2>
        <div>
          <div className='top'>
            <label>
              <span className='altura'>Altura: </span>
              <input type="text" placeholder='Digite sua altura' onChange={(e) => setAltura(e.target.value)} value={altura}/>
            </label>
          </div>
          <div className='top'>
            <label id='two'>
              <span className='peso'>Peso: </span>
              <input type="text" placeholder='Digite seu peso' onChange={(e) => setPeso(e.target.value)} value={peso}/>
            </label>
          </div>
        </div>
        <div id='botoes'>
          <Botao text={'CALCULAR'} action={(e) => CalcImc(e, peso, altura)}></Botao>
          <Botao id={'limpar'} text={'LIMPAR'} action={(e) => deleteBox(e)}></Botao>
        </div>
      </form>
    </div>
  )
}

export default Calculadora