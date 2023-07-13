import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Aside } from '../Aside/Aside'


export const ItemListContainer = () =>{
    const [products, setProducts]= useState([])
    
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
        <div className='contentBody'>
            <Aside /> 
            <ItemList products={products} />
        </div>
    )
}