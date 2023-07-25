import'./header.scss'
import { Menu } from '../Menu/Menu'
import { FaComputer } from "react-icons/fa6";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

export const Header = () =>{

    const { darkMode } = useContext(DarkModeContext)
    return(
        <header className="header">
            <div className="header__container">
                <FaComputer className='header__logo '/>
                <h3>TECHNO SHOP</h3>
                <Menu/>
            </div>
        </header>
    )
}