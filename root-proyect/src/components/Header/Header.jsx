import'./header.scss'
import { Menu } from '../Menu/Menu'
import { FaComputer } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Header = () =>{

    return(
        <header className="header">
            <div className="header__container">
                <Link to="/"><FaComputer className='header__logo '/></Link>
                <h3 className='m-0 header-title'>TECNO SHOP</h3>
                <Menu/>
            </div>
        </header>
    )
};