



export const Contenedor = ({children}) =>{
    
    const estilos = {
        background: "grey",
        color: 'white', 
        padding:'20px', 
        margin:'0 auto', 
        maxWidth:'1100px',
        textAlign:'center'
    }



    return(
        <div style={estilos}>

            {children}

            <h2>Titulo  minuto 1,26</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit dolorum magnam eos iste nemo. Debitis quasi commodi distinctio in? Dignissimos, quos nisi. Voluptatum commodi tenetur earum culpa voluptas quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis blanditiis eos architecto reiciendis, officia similique perspiciatis. Modi consectetur blanditiis expedita nihil deleniti! Minus quis doloremque autem quia mollitia quae!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aperiam dolorum reiciendis, aspernatur suscipit nam laborum, adipisci a mollitia tempora in totam non quae ad vitae consectetur quisquam deleniti accusamus.
            </p>
        </div>
    )


}