import './ItemListContainer.scss'
import { useProducts } from '../../hooks/useProducts'
import { Aside } from '../Aside/Aside'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { useEffect } from 'react'



export const ItemListContainer = () =>{
    const { products, loading } = useProducts()


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


    return(
        <div className='contentBody'>
            <Aside/>
            {loading ? <Loader/> : <ItemList products={products} />}
        </div>
    )
}