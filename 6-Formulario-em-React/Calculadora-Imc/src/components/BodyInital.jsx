import { useState } from 'react'
import style from './BodyInital.module.css'
import ScreenSecond from './ScreenSecond'

const BodyInital = () => {
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [mostrarResultado, setMostrarResultado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (altura && peso) {
            setMostrarResultado(true)
            hiddenDiv(e)
        } else {
            alert("Preencha os campos!")
        }



    }

    const handleClear = (e) => {
        e.preventDefault()

        setAltura("")
        setPeso("")
        setMostrarResultado(false)
    }


    const hiddenDiv = (e) => {
        e.preventDefault()
        if (altura && peso){
        const formulario = document.querySelector("#formulario")
        const secondForm = document.querySelector("#form-second")
        formulario.style.display = "none"
        secondForm.style.display = "flex"
        } else {
            alert("Por favor preencha os campos")
        }
    }



    const handleBack = () => {
        const formulario = document.querySelector('#formulario');
        const secondForm = document.querySelector('#form-second');
        formulario.style.display = 'block';
        secondForm.style.display = 'none';
        
    }

    return (
        <div className={style.containerPrinciapal}>
            <ScreenSecond back={handleBack}  altura={altura} peso={peso}/>
            <form onSubmit={handleSubmit} id='formulario'>
                <div className={style.title}>
                    <h1>Calculadora de IMC</h1>
                </div>
                <label className={style.inputs} >
                    <span>Altura:</span>
                    <input
                        type="number"
                        placeholder='Exemplo 1,75'
                        onChange={(e) => setAltura(e.target.value)}
                        value={altura}
                    />
                    <span>Peso:</span>
                    <input
                        type="number"
                        placeholder='Exemplo 70,5'
                        onChange={(e) => setPeso(e.target.value)}
                        value={peso}
                    />
                </label>
                <div className={style.buttons}>
                    <label className={style.labelButtons}>
                        <input
                            type='submit'
                            name='altura'
                            value="CALCULAR"
                            className={style.buttonRed}
                        />
                        <input
                            type='button'
                            name='peso'
                            value="LIMPAR"
                            onClick={handleClear}
                            className={style.buttonGray}

                        />
                    </label>
                </div>
            </form>

        </div>
    )
}

export default BodyInital