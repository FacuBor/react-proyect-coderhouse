import './Cartview.scss'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashCan } from 'react-icons/fa6'
import { Link, Navigate } from 'react-router-dom';
import Swal from "sweetalert2";

export const Cartview = ()=>{                              
    const { cart, totalCompra, vaciarCart, deleteItemCart  } = useContext(CartContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const SweetAlert = () =>{
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Tu carrito esta vacio, agregue productos!',
            confirmButtonText: 'OKEY'
        });
    };

    return(
        <div className='cartContainer'>
            { cart.length === 0              
                ?   (<> 
                        {SweetAlert()} 
                        <Navigate to='/itemlist'/>
                    </>
                    ) 
                :   (   <div className='cartDetail'>
                            <h2 className='fs-2 '>TU CARRITO DE COMPRAS</h2>
                            {
                                cart.map((item) =>(
                                    <div key={item.id} className='cartItem'>
                                            <div className='divImgCart'>
                                                <img className='cartImg ' src={item.img} alt={item.nombre} />
                                            </div>
                                            <div className='divItemDetail'>
                                                <h3 className='fs-2 titleItem'>{item.nombre}</h3>
                                                <div>
                                                    <p className='fs-6'>Precio Unidad: ${item.precio}</p>
                                                    <p className='fs-6'>Cantidad: {item.counter}</p>
                                                </div>
                                                <p className='fw-semibold totalItem fs-5'>Total: ${item.precio * item.counter}</p>
                                            </div>
                                            <div className='divDeleteItem d-flex justify-content-end'>
                                                <FaTrashCan className='btnDeleteItem' onClick={() => deleteItemCart(item.id)}/>
                                            </div>
                                    </div>
                                ))
                            }
                            <div className='divCartTotalCompra '>
                                <h4 className='totalCompra-Text'>TOTAL DE TU COMPRA: ${totalCompra()}</h4>
                                <div className='d-flex justify-content-around mt-4'>
                                    <button onClick={vaciarCart} className='btn-style btn-Vaciar'><p className='fs-6 m-0 fw-semibold'>Vaciar Carrito</p></button>
                                    <Link className='btn-style btn-SeguirCompr' to="/itemList"><p className='fs-6 m-0 fw-semibold'>Seguir Comprando</p></Link>
                                    <Link className='btn-style btn-Confirm' to="/checkout"><p className='fs-6 m-0 fw-semibold'>Confirmar Compra</p></Link>
                                </div>
                            </div>
                        </div>
                    )}  
        </div>
    )
}