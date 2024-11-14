import React from 'react'
import './Tabela.css'
import Botao from './Botao'


const Tabela = ({data, imc, voltar, info, infoClass }) => {
  return (
    <div>
        <div id='Tabela'>
          <h1>Seu IMC: <span className={infoClass}>{imc}</span></h1>
          <h3>Situação atual: <span id='info' className={infoClass}>{info}</span></h3>
          <h3>Confira as classificações</h3>

          <div id='Thead'>
            <p className='th'>IMC</p>
            <p className='th' >Classificação</p>
            <p className='th'>Obesidade</p>
          </div>

          {data.map((item) => (
            <div id='Tbody'>
              <p className='data'>{item.classification}</p>
              <p className='data'>{item.info}</p>
              <p className='data'>{item.obesity}</p>
            </div>
          ))}

          <Botao id={'voltar'} text={'VOLTAR'} action={voltar}></Botao>
        </div>
    </div>
  )
}

export default Tabela