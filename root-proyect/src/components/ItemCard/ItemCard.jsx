import './ItemCard.scss'
import { Link } from 'react-router-dom'

export const ItemCard = ({item}) =>{
    return(
        <div key={item.id} className=' card '>
            <div className=' card-style'>
                        <h4 className='fs-5'>{item.nombre}</h4>
                        <img className="card-img" src={item.img} alt={item.nombre} />
                        {item.stock > 0 
                            ? (item.stock <= 5 
                                    ? (<p className='text-danger fs-6 m-0'>Quedan {item.stock} unidades</p>) 
                                    : (<p className='m-0'>Stock disponible</p>)
                                ) 
                            : (<p className='text-danger fs-6 m-0'>No hay stock</p>)}
                        <p  className='m-0'>Precio: ${item.precio}</p>
                        <Link to={`/detail/${item.id}`} className='btn-VerMas' >Ver mas...</Link>
            </div>
                        
        </div>
    )
}