import './CheckOut.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { dataBase } from '../../firebase/config.js'
import { Link } from 'react-router-dom'

export const CheckOut = ()=>{

    const { cart, totalCompra, vaciarCart} = useContext(CartContext)

    const [ordenId, setOrdenId] = useState(null)
    const [values , setValues] = useState({
        nombre: '',
        direccion: '',
        email:'',
    })


    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        const ordenCompra = {
            cliente: values,
            items: cart.map( item => ({id: item.id, precio: item.precio, cantidad: item.counter, nombre: item.nombre, totalProd: item.precio * item.counter})),
            totalCompra: totalCompra(),
            FyH: new Date()
        }
        console.log(ordenCompra)

        //enviar a firebase
        
        ordenCompra.items.forEach(item => {

            const docRef = doc(dataBase, "productos", item.id)
            getDoc(docRef)
                .then((doc)=>{
                    
                    const stock = doc.data().stock
                    
                    if (stock >= item.cantidad){
                        updateDoc(docRef,{
                            stock: stock- item.cantidad
                        })
                    }else{
                        alert("no hay stock de " + item.nombre)
                    }
                    
        })




        /*  const ordenCompraRef = collection(dataBase, 'orders')
        addDoc(ordenCompraRef, ordenCompra)
        .then((doc)=>{
            console.log(doc.id)
            vaciarCart() 
            //sweetalert
            setOrdenId(doc.id)


        })
         */

    })


}  




    if (ordenId) {
        return(
            <div className='orden-container'>
                <div>
                    <h2>Tu compra se registro exitosamente!!</h2>
                    <p>tu numero de orden es: <strong>{ordenId}</strong></p>
                    <p>Guarde este codigo!</p>
                    <Link className='btn btn-primary' to='/'>Volver a Inico</Link>
                    <Link className='btn btn-primary' to='/contact'>Ir a contacto</Link>
                </div>
            </div>   //crear componente orderdetail orderId={orderId}
        )
    }


    return(
        <div className='checkOut-container'>
            <h2>Para terminar tu compra es necesario</h2>
            <div className='checkOut-formContainer'>
                
                <form onSubmit={handleSubmit}>
                    <input
                    required
                    onChange={handleInputChange} 
                    value={values.nombre}
                    type="text" 
                    className='form-control my-2'
                    placeholder='Nombre y Apellido'
                    name='nombre'
                    />
                    <input
                    required
                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text" 
                    className='form-control my-2'
                    placeholder='Direccion'
                    name='direccion'
                    />
                    <input
                    required
                    onChange={handleInputChange} 
                    value={values.email}
                    type="email" 
                    className='form-control my-2'
                    placeholder='Email'
                    name='email'
                    />
                    <button className='btn btn-success' type='submit' >Enviar Compra</button>
                </form>
            </div>
        </div>
    )
}