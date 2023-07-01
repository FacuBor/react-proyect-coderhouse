import { useState } from "react"

export const Counter = () =>{

    const[counter, setCount] = useState(0);
    const[saludo, setSaludo] = useState(true)
    console.log(saludo)

    
    const sumar = () =>{
        setCount(counter + 1)
    }
    const restar = () =>{
        setCount(counter - 1)
    }
    const cambiarSaludos = () =>{
        setSaludo(saludo === true ? false : true)
    }


    return(
        <div> 
            <hr />
            <h1>Contador de clicks</h1>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <p>Clicks: {counter}</p>
            <hr />
            <button onClick={cambiarSaludos}>Saludar</button>
            <p className={saludo ?"hola":"chau"}>{saludo ? "Hola mundo" : "Chau mundo"}</p>
        </div>
    )
}