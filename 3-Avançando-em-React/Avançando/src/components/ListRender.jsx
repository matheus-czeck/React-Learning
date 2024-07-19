import { useState } from "react"

export const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Jorge", "Matheus"])

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 22},
        {id: 2, name: "Daniel", age: 23},
        {id: 3, name: "Lucas", age: 43},
    ])

    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        {/*4- Render sem Key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5- Render com Key */}
        <ul>
            {users.map((user)=> (
                <li key={user.id}> {user.name} - {user.age} anos</li>
            ))}
            {/*6- Previous State  */}
            <button onClick={deleteRandom}>
                Delete random User
            </button>
        </ul>
    </div>
  )
}
