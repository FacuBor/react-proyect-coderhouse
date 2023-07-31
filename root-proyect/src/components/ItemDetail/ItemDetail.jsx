import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState} from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) =>{

    const { agregarCarrito, isInCart } = useContext(CartContext)
    
    const[counter, setCounter] = useState(1)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            counter
        }
        agregarCarrito(newItem);
    }

    

    return(
        <div className='detailContainer d-flex justify-content-center align-items-center'>
            <div className='detail-box'>
                <img className='img-detail' src={item.img} alt={item.nombre} />
                <div className='detail-content'>
                    <h2 className='detail-title'>{item.nombre}</h2>
                    <p className='detail-description text-secondary'>{item.descripcion}</p>
                    <p className='detail-price fw-semibold fs-5'>Precio:$ {item.precio * counter}</p>
                    
                    {
                        isInCart(item.id)
                        ?   <Link className='btn btn-success align-self-center' to='/cart'>Terminar Compra</Link>
                        :   <ItemCount 
                                max={item.stock}
                                counter={counter}
                                setCounter={setCounter}
                                agregar={handleAgregar}
                            />
                    }
                    <Link className='btn btn-primary align-self-center' to="/itemList">Seguir comprando</Link>
                </div>
            </div>
        </div>
    )

}