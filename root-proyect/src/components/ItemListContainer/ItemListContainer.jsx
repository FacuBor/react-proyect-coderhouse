import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = () =>{
    const [products, setProducts]= useState([])
    console.log(products)
    
        useEffect(()=>{
            pedirDatos()
                    .then((res)=>{
                        setProducts(res)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
        }, [])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}