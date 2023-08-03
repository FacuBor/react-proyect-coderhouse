import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../Loader/Loader';
import './Contact.scss'
import Swal from "sweetalert2";
import { Navigate } from 'react-router-dom';



export const Contact = () =>{

    const { loading } = useProducts()

    const form = useRef()

    const SweetAlert = () =>{

        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: 'Gracias por contactarte, espere se respuesta!',
            confirmButtonText: 'BYE'
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gc9i73k', 'template_ll3tbsw', form.current, 'r9DxNrJgEwkNl7DmH')
            .then((result) => {
                SweetAlert()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        };
    if (loading){
        return <Loader/>
    }//chekear si es necesario sino sacarlo

    return(
        <div className="contactBody">
            <div className='contactContainer'>
                <div className='detailContainer text-center p-3 d-flex flex-column align-items-center justify-content-center'>
                    <form ref={form} onSubmit={sendEmail} className='formControlCard'>
                        <h2 className='text-secondary m-0'>Contact Me</h2>
                        <input className='input' type="text" placeholder='Nombre Completo' name='user_name' required />
                        <input className='input' type="email" placeholder='Email' name='user_email' required />
                        <input className='input' type="text" placeholder='Motivo' name='subject' required />
                        <textarea className='textArea' placeholder='Escriba...' name="message"  cols="30" rows="10"></textarea>
                        <button type="submit" className='btn btn-success'>ENVIAR MENSAJE</button>
                        <p className='fs-6 m-0 align-self-end text-secondary'>@emailJS</p>
                    </form>
                    

                </div>
            </div>
        </div>
    )
}