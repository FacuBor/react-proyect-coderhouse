import'./header.scss'
import { Menu } from '../Menu/Menu'

export const Header = () =>{

    
    
    return(
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src="/src/assets/react.svg" alt="" srcset="" />
                <h1 className="header__title">TechnoShop</h1>
                <Menu/>
            </div>
        </header>
    )
}