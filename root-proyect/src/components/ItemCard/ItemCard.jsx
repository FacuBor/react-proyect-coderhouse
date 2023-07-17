import './ItemCard.scss'

export const ItemCard = ({item}) =>{
    return(
        <div key={item.id} className=' card-style card '>
                        <h4>{item.nombre}</h4>
                        <img className="card-img" src={item.img} alt={item.nombre} />
                         <p>{item.descripcion}</p>
                        <p>Precio: ${item.precio}</p>
                        <button className='btn btn-primary'>ver mas</button>
        </div>
    )
}