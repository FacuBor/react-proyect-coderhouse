
import { ItemCard } from "../ItemCard/ItemCard"
import "./ItemList.scss"

export const ItemList = ({products}) =>{

    return(
        <div className="cardContainer m-0 ">
            {
                products.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
            }
            
        </div>
    )
}