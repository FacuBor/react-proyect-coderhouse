
import { ItemCard } from "../components/ItemCard/ItemCard"
import { withProductsData } from "./withProductsData"

const ItemList2 = ({products, loading}) =>{
    return(
        <div className="cardContainer m-0 ">
            {
                loading 
                ? <h2>Cargando...</h2>
                : products.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
            
            }
        </div>
    )
}

export default withProductsData(ItemList2)