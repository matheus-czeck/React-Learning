import React from 'react'

const ConditionalRender = () => {
    const x = 4
    const name = "Jão"

  return (
    <div>
        <h3>Isso será Exibido?</h3>
        {x > 2 && <p> Se x for True Sim!</p>}
        {/*8- Else */}
        <h3>Render Ternário</h3>
        {name === "Jão" ? (
            <div>
                <p>Olá Jão</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender