import './ItemDetail.scss'

export const ItemDetail = ({item}) =>{



    return(
        <div className='detail-box border border-secondary'>
            <h2>{item.nombre}</h2>
            <img className='img-detail' src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>Precio:$ {item.precio}</p>

            <button className='btn btn-success'>Agregar</button>
        </div>
    )

}