import React from 'react'

function Events() {
    const handleClick = (e) =>{
        console.log(e)
        console.log("Executou")

    }

    //8- funçaõ de renderização 
    const renderSomething = (x)=>{
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Renderizando outra coisa</h1>
        }
    }
   // return 10 > 2 && <p>carregando...</p> 
  return (
    <div>
        <div>
            <button onClick={()=>{
                console.log("Testando")
            }}>Clique aqui</button>
        </div>

        {/*Evento com função */}
        <div>
            <button onClick={handleClick}>Clique em mim</button>
            {/* 8 Função com render */}
            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    </div>
  )
}

export default Events