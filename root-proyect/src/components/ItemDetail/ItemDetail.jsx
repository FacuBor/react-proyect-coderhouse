import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'

export const ItemDetail = ({item}) =>{
    
    const[counter, setCounter] = useState(1)

    const addToCart = () =>{
        console.log("producto agregado", {
            ...item,
            counter
        })
    }


    return(
        <div className='detailContainer'>
            <div className='detail-box'>
                <img className='img-detail' src={item.img} alt={item.nombre} />
                <div className='detail-content'>
                    <h2 className='detail-title'>{item.nombre}</h2>
                    <p className='detail-description'>{item.descripcion}</p>
                    <p className='detail-price'>Precio:$ {item.precio}</p>

                    <ItemCount 
                        stock={item.stock}
                        counter={counter}
                        setCounter={setCounter}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    )

}