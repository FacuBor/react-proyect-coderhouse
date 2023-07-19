import './ItemListContainer.scss'
import { useProducts } from '../../hooks/useProducts'
import { Aside } from '../Aside/Aside'
import { ItemList } from '../ItemList/ItemList'



export const ItemListContainer = () =>{
    const {loading} = useProducts()
    const { products } = useProducts()




    return(
        <div className='contentBody'>
            <Aside/>
            
            {
                loading
                    ? <h3 className='text-primary loadingText'>Cargando...</h3>
                    : <ItemList products={products} />
            }
            
        </div>
    )
}