import './ItemListContainer.scss'
import { Counter } from '../../ejemplos/Counter'
import Button from 'react-bootstrap/Button';


export const ItemListContainer = ({saludo}) =>{

    return(
        <div className="products__container">
            <h2>Item List Container</h2>
            <hr />
            <p>Coder House</p>
            <p>{saludo}</p>
            <Counter />

            <Button variant="dark">CLICK ME</Button>
            
        </div>
    )



}