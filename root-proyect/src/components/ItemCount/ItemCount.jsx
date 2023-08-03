
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
            <div className='m-0'>

                <button onClick={handleRestar} className={`btn btnCount  ${counter === 1? "btn-outline-danger" : "btn-outline-primary"}`} disabled={counter === 1}> - </button>

                <span className='mx-3 my-0 fs-5 '>{counter}</span>

                <button onClick={handleSumar} className={`btn btnCount  ${counter == max ? "btn-outline-danger" : "btn-outline-primary"}`}  disabled={counter == max}> + </button>

            </div>

            <button onClick={agregar}  className='btn btn-success addButton'>Add to Cart</button>
        </div>
    )
}