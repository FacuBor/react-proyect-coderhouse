

export const ItemCard = ({item}) =>{
    return(
        <div key={item.id} className='card col-2 m-2 p-1'>
                        <h4>{item.nombre}</h4>
                        <img src={item.img} alt={item.nombre} />
                        <p>{item.descripcion}</p>
                        <p>Precio: ${item.precio}</p>
                        <button className='btn btn-primary'>ver mas</button>
        </div>
    )
}