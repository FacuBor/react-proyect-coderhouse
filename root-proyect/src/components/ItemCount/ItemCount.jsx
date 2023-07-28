
import './ItemCount..scss'

export const ItemCount = ({max, counter, setCounter, agregar}) =>{
    

    const handleRestar = () =>{
        counter > 1 && setCounter(counter - 1) 
    }
    const handleSumar = () =>{
        counter < max && setCounter(counter + 1) 

    }


    return(
        <div className='countContainer'>
            <div className='ms-3'>

                <button onClick={handleRestar} className={`btn ${counter === 1? "btn-outline-danger" : "btn-outline-primary"}`} disabled={counter === 1}> - </button>

                <span className='mx-2'>{counter}</span>

                <button onClick={handleSumar} className={`btn ${counter == max ? "btn-outline-danger" : "btn-outline-primary"}`}  disabled={counter == max}> + </button>

            </div>

            <button onClick={agregar}  className='btn btn-success addButton'>Add to Cart</button>
        </div>
    )
}