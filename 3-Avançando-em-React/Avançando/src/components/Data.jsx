import { useState } from "react"

function Data() {
    let somaData = 10
    const [anotherNumber, setAnotherNumber] = useState(15)
    const [newAge, setNewAge] = useState("idade")
  return (
    <div>
        <p>Valor: {somaData}</p>
        <button onClick={()=>{
            somaData = 15
        }}>Mudar variável</button>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={()=> setAnotherNumber(20)}>Mudar State</button>
        </div>
        <div>
            <p>Sua idade: {newAge}</p>
            <button onClick={()=>{setNewAge(22)}}>Clique aqui para aparecer sua idade:</button>
        </div>
    </div>
  )
}

export default Data