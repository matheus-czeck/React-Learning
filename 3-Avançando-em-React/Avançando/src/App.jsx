
import './App.css'
//2- Imagem em assets
import saoPaulo from './assets/São_Paulo.jpg'

//3 - useState
import Data from './assets/components/Data'

//4- Renderização de lista
import { ListRender } from './assets/components/ListRender'

import ConditionalRender from './assets/components/ConditionalRender'

//8- props
import { ShowUserName } from './assets/components/ShowUserName'

//9 - Desestruturar compenentes
import { CarDetails } from './assets/components/CarDetails'

//11- Renderização de Componentes

const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "Kia", color: "Preto", km: 12000},
  {id: 3, brand: "Renault", color: "Branco", km: 31000},

]

//12- Fragments
import Fragments from './assets/components/Fragments'

//13 - Children

import Container from './assets/components/Container'

//14-Function em prop
import ExecuteFunction from './assets/components/ExecuteFunction'
import { useState } from 'react'

//15- State Lift
//import { useState } from 'react'
import Massage from './assets/components/Massage'
import ChangeMassage from './assets/components/ChangeMassage'


function App() {

    //14- funcao em prop
    function showMessage () {
      console.log("Evento do componente pai")
    }

    //15- State Lift
    const [message, setMessage] = useState("")

    const handleMessage = (msg) =>{
      setMessage(msg)
    }

  return (
    < >
    <div className='App' style={{paddingBottom: "500px"}}>
 
      <h1>Avançando em React</h1>
      {/*1- Imagem em public */}

      <img src="/suport.png" alt="Imagem de um atendente" />
    {/*2-Imagem em Assests ou outras pastas*/}

    <img src={saoPaulo} alt="imagem de São Paulo" />
    {/*3- useState */}
    <Data />

    {/*4 - Renderização de lista */}
    <ListRender />

    {/*7 - Condicional Render */}
    <ConditionalRender />

    {/*8- Props */}
    <ShowUserName name="Matheus"/>

    {/*9- Desestruturando componentes */}
    <CarDetails brand="Vw" km={120000} color="Vermelho"/>

    {/*10 - Reaproveitamento de componentes */}
    <CarDetails brand="Fait" km={90000} color="Branco"/>
    <CarDetails brand="Renault" km={5000} color="Preto"/>

    {/*11- Renderização de lista com componentes */}
    {cars.map((car) => (
      <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
    ))}

    {/*12- Fragments */}
    <Fragments />

    {/*13- Children */}
    <Container> 


      <div>
        <h2>Teste</h2>
        <p>Meu componente</p>
      </div>
    </Container>

    {/*14- Function em prop */}
    <ExecuteFunction myFunction={showMessage}/>

    {/*15 - State Lift */}
    <Massage msg={message}/>
    <ChangeMassage handleMessage={handleMessage}/>
    

    </div>
    </>
  )
}

export default App
