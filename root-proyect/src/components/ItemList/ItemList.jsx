import "./ItemList.scss";
import { ItemCard } from "../ItemCard/ItemCard";

export const ItemList = ({products}) =>{
    return(
        <div className="cardContainer p-2 m-0  ">
            {
                products.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
            }
        </div>
    )
};