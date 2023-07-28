import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import './ItemDetailContainer.scss'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'



export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)
    const [loading, setLoading] =useState (true)

    const { itemId } = useParams()

    useEffect(()=>{
        setLoading(true)


        pedirDatos()
        .then(r =>{
            setItem( r.find(prod => prod.id === Number(itemId)) )
        })
        .finally(()=> setLoading(false))


    },[])


    return(
        <div className='itemDetailContainer'>
            {
                loading
                ?  <div className='divLoader'><Loader/></div>
                : <ItemDetail item={item}/>
            }
        </div>
    )


}