import './ItemListContainer.scss'
import { useProducts } from '../../hooks/useProducts'
import { AsideAndItems } from '../AsideAndItems/AsideAndItems'


export const ItemListContainer = () =>{
    const {loading} = useProducts()
    return(
        <div className='contentBody'>
            
            {
                loading
                    ? <h3 className='text-primary mb-5'>Cargando...</h3>
                    : <AsideAndItems/>
            }
            
        </div>
    )
}