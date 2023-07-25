import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cartview.scss'
import { FaTrashCan } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Cartview = ()=>{
    const { cart, totalCompra, vaciarCart, deleteItemCart } = useContext(CartContext)
    return(
        <div className='cartContainer'>
            <div className='cartDetail'>


                <h2 className='fs-1 text-secondary'>Tus Compras</h2>



                {
                    cart.map((item) =>(
                        <div key={item.id} className='cartItem'>
                                <div className='divImgCart'>
                                    <img className='cartImg ' src={item.img} alt={item.nombre} />
                                </div>
                                <div className='divItemDetail'>
                                    <h3 className='fs-2'>{item.nombre}</h3>
                                    <div>
                                        <p className='fs-6'>Precio Unidad: ${item.precio}</p>
                                        <p className='fs-6'>Cantidad: {item.counter}</p>
                                    </div>
                                    <p className='fw-semibold fs-5'>Total: ${item.precio * item.counter}</p>
                                </div>
                                <div className='divDeleteItem d-flex justify-content-end'>
                                    <FaTrashCan className='btnDeleteItem' onClick={() => deleteItemCart(item.id)}/>
                                </div>
                        </div>
                    ))
                }


                <div className='divCartTotalCompra '>
                    <h4 className='text-secondary'>TOTAL DE TU COMPRA: ${totalCompra()}</h4>
                    <div className='d-flex justify-content-around mt-4'>
                        <button onClick={vaciarCart} className='btn btn-warning'><p className='fs-6 m-0 fw-semibold'>Vaciar Carrito</p></button>
                        <Link className='btn btn-primary ' to="/itemList"><p className='fs-6 m-0 fw-semibold'>Seguir Comprando</p></Link>
                    </div>
                </div>



            </div>
        </div>
    )
}