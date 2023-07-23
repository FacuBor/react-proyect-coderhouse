import './Footer.scss'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () =>{

    return(
        <div className='footerContainer'>
            <div className='footerContent'>
                
                <div className='iconContainer'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='footerIcon'/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram className='footerIcon' /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin className='footerIcon' /></a>
                </div>
                <p className='fw-semibold'>Proyect by Borssolasco Facundo - React Js - Coder House</p>
            </div>
        </div>
    )
}