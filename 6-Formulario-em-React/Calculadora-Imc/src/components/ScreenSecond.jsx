import { useState } from 'react'
import estilo from './ScreenSecond.module.css'

const ScreenSecond = ({ back, altura, peso }) => {

    const [color, setColor] = useState("black")

    const calcImc = () => {
        if (!altura || altura <= 0 || !peso || peso <= 0) {
            return 0; // Retorna 0 ou um valor padrão quando altura ou peso não são válidos
          }
        let imc = peso / (altura * altura)
        imc = parseFloat(imc.toFixed(2))
        return imc
    }

    const colorImc = () => {
        let newColor = color
        let situation = ""
        let imc = calcImc()

        if (imc< 18.5) {
             situation = "Magreza"
            newColor = "orange"

        } else if (imc>= 18.5 && imc<= 24.9) {
            situation = "Normal"
            newColor = "green"


        } else if (imc>= 25.0 && imc<= 29.9) {
            situation = "Sobrepeso"
            newColor = "orange"

            
        } else if (imc>= 30.0 && imc<= 39.9) {
            situation = "Obesidade"
            newColor = "red"
        
        } else if (imc>= 40) {
            situation = "Obesidade grave"
            newColor = "darkred"
        }

        if(newColor !== color){
            setColor(newColor)
        }

        return situation
        

    }



    return (
        <div className={estilo.containerTwo} id='form-second'>
            <div className={estilo.divResult}>
                <h1>Seu IMC: <span style={{color:color}}>{calcImc()}</span></h1>
                <h2>Situação atual: <span style={{color: color}}>{colorImc()}</span> </h2>
            </div>
            <div className={estilo.table}>
                <h2>Confira as Classificações</h2>
                <table>
                    <thead>
                        <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Obesidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menor que 18,5</td>
                            <td>Magreza</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Entre 18,5 e 24,9</td>
                            <td>Normal</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Entre 25,0 e 29,0</td>
                            <td>Sobrepeso</td>
                            <td>I</td>
                        </tr>
                        <tr>
                            <td>Entre 30,0 e 39,9</td>
                            <td>Obesidade</td>
                            <td>II</td>
                        </tr>
                        <tr>
                            <td>Maior que 40,00</td>
                            <td>Obesidade grave</td>
                            <td>III</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className={estilo.backButton}>
                <button onClick={back} className={estilo.backButton}>VOLTAR</button>
            </div>

        </div>
    )
}

export default ScreenSecond