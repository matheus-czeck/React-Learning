
import './App.css'
//2- importando componentes
import FistComponent from './components/FirstComponent'

//5- Hierarquia de componentes
import MyComponent from './components/MyComponent'

//4- Template expression
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'


function App() {
  
//-3 comentários
  return (
    <>
    <div>
      {/*Comentários JSX */}
      <h1>Fundamentos do React</h1>
      <FistComponent/>
      <TemplateExpression />
      <MyComponent/>
      <Events />
      
    </div>
      
    </>
  )
}

export default App
