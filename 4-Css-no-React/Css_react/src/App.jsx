import './App.css'

//2- css de componente
import MyComponents from './components/MyComponents'
import Title from './components/Title'

function App() {
  //4- css dinâmico
  const n = 15

  //5- Classes dinamicas
  const redTitle = false

  return (
    <>
    <div className='App'>
      {/*1- Css Global */}
      <h1 className='title'>Css no React</h1>

      {/*2- Css de componente */}
      <MyComponents />
      <p>Pegou o css do componente</p>

      {/*3- Inline Style */}
      <p style= {{color:"blue", padding:"25px", borderTop:"1px dotted green"}}>Este elemento tem estilo inline</p>

      {/*4- Inline dinâmico */}
      <h2 style={n > 7 ? {color:"purple"} : {color:"magenta"}}>
        Css dinâmico
      </h2>
      <h2 style={n > 17 ? {color:"purple"} : {color:"magenta"}}>
        Css dinâmico 2
      </h2>

      {/*5-Classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>

      {/*6- Css Module */}
      <Title />

    </div>

      
        
    </>
  )
}

export default App
