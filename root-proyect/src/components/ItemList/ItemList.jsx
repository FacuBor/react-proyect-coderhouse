import { ItemCard } from "../ItemCard/ItemCard"

export const ItemList = ({products}) =>{

    return(
        <div className="container text-center ">
            <h2>Item List Container.</h2>
            <hr />
            <div className='row'>
            {
                products.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
            }
            </div>
        </div>
    )
}