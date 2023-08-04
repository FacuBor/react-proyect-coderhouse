import './CheckOut.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, addDoc, updateDoc, getDoc, doc, writeBatch, query, where, documentId } from 'firebase/firestore'
import { dataBase } from '../../firebase/config.js'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(5, 'Minimo 5 caracteres')
        .max(20, 'Maximo 20 caracteres')
        .required('Este campo es obligatorio!'),
    direccion: Yup.string()
        .min(5, 'Minimo 5 caracteres')
        .max(50, 'Maximo 50 caracteres')
        .required('Este campo es obligatorio!'),
    email: Yup.string()
        .email('Email invalido')
        .required('Este campo es obligatorio!'),

})







export const CheckOut = ()=>{

    const { cart, totalCompra, vaciarCart} = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [ordenId, setOrdenId] = useState(null)




    const handleSubmit = async (values) =>{
        
        setLoading(true)

        const ordenCompra = {
            cliente: values,
            items: cart.map( item => ({id: item.id, precio: item.precio, cantidad: item.counter, nombre: item.nombre, totalProd: item.precio * item.counter})),
            totalCompra: totalCompra(),
            FyH: new Date()
        }
        //enviar a firebase
        const batch = writeBatch(dataBase)
        const ordenCompraRef = collection(dataBase, 'orders')
        const productosRef = collection (dataBase, 'productos')
        const q =query( productosRef, where( documentId(), 'in', cart.map(item => item.id) ))

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach( (doc)=> {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if(stock >= item.counter){
                batch.update(doc.ref, {
                    stock: stock - item.counter
                })
            } else{
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()
            const doc = await addDoc(ordenCompraRef, ordenCompra)

            vaciarCart()
            //sweet alert
            setOrdenId(doc.id)
        }else{
            alert("no hay stock de un producto")
            console.log(outOfStock + 'sin stock!')
        }

        setLoading(false)

    }







    if (ordenId) {
        return(
            <div className='orden-container'>
                <div className='orden-content'>
                    <h2 className='orden-title'>Tu compra se registro exitosamente!!</h2>
                    <p className='orden-Id'>Tu numero de compra es: <strong>{ordenId}</strong></p>
                    <p>Recibira en su Email un resumen de su compra y Metodos de pago! Guarde este codigo!</p>
                    <div className='orden-buttons'>
                        <Link className='btn btn-primary' to='/'>Volver a Inico</Link>
                        <Link className='btn btn-primary' to='/contact'>Contáctanos</Link>
                    </div>
                </div>
            </div>   //crear componente orderdetail orderId={orderId}
        )
    }


    return(
        <div className='checkOut-container'>
            
            <div className='checkOut-formContainer'>
                <Formik
                    initialValues={{
                        nombre: '',
                        direccion: '',
                        email:''
                    }}
                    onSubmit={handleSubmit} 
                    validationSchema={validationSchema}
                >


                    { 
                        ()=>(
                            <Form className='form-container'>
                                <h2>Complete para terminar su compra!</h2>
                                <Field placeholder="Nombre y Apellido" className='form-input' type="text" name="nombre" />
                                <ErrorMessage className='m-0'  name='nombre' component="p"/>
                                <Field placeholder="Direccion" className='form-input' type="text" name="direccion" />
                                <ErrorMessage className='m-0'  name='direccion' component="p"/>
                                <Field placeholder="Email" className='form-input' type="email" name="email" />
                                <ErrorMessage className='m-0'  name='email' component="p"/>
                                <button type='submit' disabled={loading} className='btn btn-success'>Enviar Compra</button>
                            </Form>
                    )}


                </Formik>
            </div>
        </div>
    )
}