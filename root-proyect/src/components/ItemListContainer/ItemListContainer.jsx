import './ItemListContainer.scss'
import { useProducts } from '../../hooks/useProducts'
import { Aside } from '../Aside/Aside'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'



export const ItemListContainer = () =>{
    const { products, loading } = useProducts()



    return(
        <div className='contentBody'>
            <Aside/>
            {loading ? <Loader/> : <ItemList products={products} />}
        </div>
    )
}