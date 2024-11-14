import React, { useState } from 'react'
import Calculadora from './Calculadora'
import Tabela from './tabela'
import { data } from '../data/data'

const Tela = () => {
    const [imc, setImc] = useState("")
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [info, setInfo] = useState("")
    const [classification, setClassification] = useState("")
   
    const CalcImc = (e, peso, altura) => {
        e.preventDefault()
        if(!peso || !altura) return
        peso = peso.replace(",", ".")
        altura = altura.replace(",", ".")

        var temp = (parseFloat(peso)/ (parseFloat(altura)*parseFloat(altura))).toFixed(1)

        setImc(temp)
        data.forEach((item) => {
          if(temp >= item.min && temp <= item.max){
            setInfo(item.info)
            setClassification(item.infoClass)
          }
      }) 

    }

    const voltar = (e) => {
      e.preventDefault()
      setImc("")
      setInfo("")
      setClassification("")
      setPeso("")
      setAltura("")
    }
  return (
    <div >
        {!imc?(<Calculadora CalcImc={CalcImc} />):(<Tabela data={data} imc={imc} info={info} infoClass={classification} voltar={voltar}/>)}
    </div>
  )
}

export default Tela