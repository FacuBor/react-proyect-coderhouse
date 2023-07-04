import { useState } from "react"

export const Counter = () =>{

    const[counter, setCount] = useState(0);

    
    const sumar = () =>{
        setCount(counter + 1)
    }
    const restar = () =>{
        setCount(counter - 1)
    }
    


    return(
        <div> 
            <hr />
            <h2>Clicks</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <p>Clicks: {counter}</p>
            <hr />
        </div>
    )
}
