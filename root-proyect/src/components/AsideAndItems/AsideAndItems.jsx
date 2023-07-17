import { useProducts } from "../../hooks/useProducts"
import { Aside } from "../Aside/Aside"
import { ItemList } from '../ItemList/ItemList'
import './AsideAndItems.scss'



export const AsideAndItems = ()=>{
    const { products } = useProducts()

    return (
        <>
        <Aside/>
        <ItemList products={products} />
        </>
        
        )

}