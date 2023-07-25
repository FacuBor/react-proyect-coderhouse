import './CartWidget.scss'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = ()=>{
    const { totalCartItems } = useContext(CartContext)

    return(
        <Link to="/cart" className='cartWidget'>
            <FaCartShopping className='cartIcon'/>
            <span className='cartSpan'>{totalCartItems()}</span>
        </Link>
    )
}