import './Aside.scss';
import { Link } from 'react-router-dom';

export const Aside = () =>{
    return(
        <div className='asideBody'>
            <div className='contentAside'>
                <nav className='asideNav'>
                    <Link className='asideLink' to="/itemlist">Todo</Link>
                    <Link className='asideLink' to="/itemlist/gabinetes">Gabinetes</Link>
                    <Link className='asideLink' to="/itemlist/procesadores">Procesadores</Link>
                    <Link className='asideLink' to="/itemlist/memoriasRam">Memoria RAM</Link>
                    <Link className='asideLink' to="/itemlist/monitores">Monitores</Link>
                    <Link className='asideLink' to="/itemlist/perifericos">Perifericos</Link>
                    <Link className='asideLink' to="/itemlist/almacenamiento">Almacenamiento</Link>
                    <Link className='asideLink' to="/itemlist/placasDeVideo">Placas de Video</Link>
                    <Link className='asideLink' to="/itemlist/fuentes">Fuentes</Link>
                    <Link className='asideLink' to="/itemlist/otros">Otros</Link>
                </nav>
            </div>
        </div>
    )
};