import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import './Contact.scss'



export const Contact = () =>{

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gc9i73k', 'template_ll3tbsw', form.current, 'r9DxNrJgEwkNl7DmH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };


    return(
        <div className="contactBody">
            <div className='contactContainer'>
                <div className='detailContainer text-center p-4 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='text-secondary mb-5'>Contact Me</h2>

                    <form ref={form} onSubmit={sendEmail} className='formControlCard'>
                        <input className='input' type="text" placeholder='Nombre Completo' name='user_name' required />
                        <input className='input' type="email" placeholder='Email' name='user_email' required />
                        <input className='input' type="text" placeholder='Motivo' name='subject' required />
                        <textarea className='textArea' placeholder='Escriba...' name="message"  cols="30" rows="10"></textarea>
                        <button type="submit" className='btn btn-primary'>Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}