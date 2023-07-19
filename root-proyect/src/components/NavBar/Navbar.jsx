import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () =>{
    return(
        <nav className="navbar">
                    <Link className="navbar__link" to="/">Inicio</Link>
                    <Link className="navbar__link" to="/itemlist">Productos</Link>
                    <Link className="navbar__link" to="/contact">Contacto</Link>
        </nav>
    )
}