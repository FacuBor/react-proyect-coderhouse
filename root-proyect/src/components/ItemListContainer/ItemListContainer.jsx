import './ItemListContainer.scss'
import { Counter } from '../../ejemplos/Counter'


export const ItemListContainer = ({saludo}) =>{

    return(
        <div className="products__container">
            <h2>Item List Container</h2>
            <hr />
            <p>Coder House</p>
            <Counter />

            
        </div>
    )



}