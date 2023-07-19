import './ItemCard.scss'
import { Link } from 'react-router-dom'

export const ItemCard = ({item}) =>{
    return(
        <div key={item.id} className=' card-style card '>
                        <h4>{item.nombre}</h4>
                        <img className="card-img" src={item.img} alt={item.nombre} />
                        <p>{item.descripcion}</p>
                        <p>Precio: ${item.precio}</p>
                        <Link to={`/detail/${item.id}`} className='btn btn-primary'>ver mas</Link>
        </div>
    )
}