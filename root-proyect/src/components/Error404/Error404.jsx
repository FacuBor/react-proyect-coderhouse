import './Error404.scss'
import { BiError } from "react-icons/bi";


export const Error404 = () =>{


    return(
        <div className='error404Container'>
            <div className='error404Content'>
                <div>
                    <BiError className='icon404'/>
                </div>
                <div>
                    <h1>Error 404 (Pagina no encontrada)</h1>
                    <p>Lo sentimos, pero la pagina que buscas no existe.</p>
                </div>
            </div>

        </div>
    )
}