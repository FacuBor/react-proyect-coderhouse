import './Menu.scss';
import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { CartWidget } from '../CartWidget/CartWidget';
import { MenuList } from './MenuList';

export const Menu = () =>{
    const[showMenu, setShowMenu] = useState(false);
    const { cart } = useContext(CartContext);
    const handleOpen = () =>{
        setShowMenu(true)
    };
    const handleClose = () =>{
        setShowMenu(false)
    };

    return(
        <div className={showMenu ? 'menu-active menuContainer ' : 'menuContainer'}>
            <div className='cart-Navbar-Icons'>
                <div className={ cart.length === 0 ? "disabledCart" : ''}>
                    <CartWidget/>
                </div>
                <FaBars onClick={handleOpen} className='menuIcon' />
            </div>
            <div onClick={handleClose} className='menu-backdrop'>
                <MenuList close={handleClose}/>
            </div>
        </div>
    )
}