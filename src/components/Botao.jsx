import React from 'react'
import './Botao.css'

function Botao({id, text, action}) {
    const limpar = (e) =>{
        action(e)
    }
  return (
        <button id={id} onClick={limpar}>{text}</button>
  )
}

export default Botao