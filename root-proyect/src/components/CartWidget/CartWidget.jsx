import './CartWidget.scss'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';

export const CartWidget = ()=>{
    const { cart, totalCartItems } = useContext(CartContext)

    /* const [cartCount, setCartCount] = useState(0) */ /* length cart Span*/
    /* useEffect(()=>{
            setCartCount(cart.length);
    },[cart])
 */
    return(
        <Link to="/cart" className='cartWidget'>
            <FaCartShopping className='cartIcon'/>
            <span className='cartSpan'>{totalCartItems()}</span>
        </Link>
    )
}