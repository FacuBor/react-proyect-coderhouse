import { useEffect } from 'react'
import { useState } from 'react'
import './Contact.scss'



export const Contact = () =>{

    useEffect(() => {
        window.addEventListener('click', ()=>{
            console.log('Click')
        })
    }, [])


    return(
        <div className="contactBody">
            <div className='contactContainer'>
                <div className='detailContainer text-center p-4'>
                    <h1 className='text-black mb-5'>Contact Me</h1>
                </div>
            </div>
        </div>
    )
}