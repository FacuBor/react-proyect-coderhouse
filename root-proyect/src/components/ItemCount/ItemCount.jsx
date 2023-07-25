
import './ItemCount..scss'

export const ItemCount = ({stock, counter, setCounter, handleAgregar}) =>{
    

    const handleRestar = () =>{
        counter > 1 && setCounter(counter - 1) 
    }
    const handleSumar = () =>{
        counter < stock && setCounter(counter + 1) 
    }



    return(
        <div className='countContainer'>
            <div>
            <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
            <span className='mx-2'>{counter}</span>
            <button onClick={handleSumar} className='btn btn-primary'>+</button>
            </div>

            <button onClick={handleAgregar}  className='btn btn-success addButton'>Add to Cart</button>
        </div>
    )
}