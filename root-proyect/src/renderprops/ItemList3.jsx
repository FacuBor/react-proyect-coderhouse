import { ItemCard } from "../components/ItemCard/ItemCard";
import { ProductsData } from "./ProductsData";


export const ItemList3 = () =>{


    return(

        <div className="containter">

            <ProductsData>
                {(products, loading) =>(
                    <div className="cardContainer m-0 mt-4">
                        {
                            loading
                            ? <h3>cargando...</h3>
                            : products.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
                        }

                    </div>
                )}
            </ProductsData>

        </div>
    )
}