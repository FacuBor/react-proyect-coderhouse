import './Aside.scss'
import { Link } from 'react-router-dom'

export const Aside = () =>{
    return(
        <div className='asideBody'>
            <div className='contentAside'>
                <nav className='asideNav'>
                    <Link className='asideLink fs-5 ' to="/itemlist">Todo</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/gabinetes">Gabinetes</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/procesadores">Procesadores</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/memoriasRam">Memoria RAM</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/monitores">Monitores</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/perifericos">Perifericos</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/almacenamiento">Almacenamiento</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/placasDeVideo">Placas de Video</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/fuentes">Fuentes</Link>
                    <Link className='asideLink fs-5 ' to="/itemlist/otros">Otros</Link>
                </nav>
            </div>
        </div>
    )
}