import'./header.scss'
import { Menu } from '../Menu/Menu'
import { FaComputer } from "react-icons/fa6";

export const Header = () =>{

    
    
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