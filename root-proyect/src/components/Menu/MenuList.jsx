import './Menu.scss';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const MenuList = ({close}) =>{
        return(
                <nav onClick={(e) => e.stopPropagation()} className="menuList">
                        <AiOutlineCloseCircle onClick={close} className='closeIcon'/>
                        <Link onClick={close} className="menuList__link" to="/">Inicio</Link>
                        <Link onClick={close} className="menuList__link" to="/itemlist">Productos</Link>
                        <Link onClick={close} className="menuList__link" to="/contact">Contacto</Link>
                </nav>
        )
};