export const Usuario = ({ nombre, edad, rol}) => {
    
    return(
        <div>
            <h2>{nombre}</h2>
            <p>Edad: {edad}</p>
            <p>Rol: {rol}</p>
        </div>
    )
}