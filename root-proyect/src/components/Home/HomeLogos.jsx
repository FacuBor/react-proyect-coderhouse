import './HomeLogos.scss'
import  logo1  from '../../assets/img/logos/intel-Logo.png'
import  logo2  from '../../assets/img/logos/amd-Logo.png'
import  logo3  from '../../assets/img/logos/Asus-logo.png'
import  logo4  from '../../assets/img/logos/corsair-logo.png'
import  logo5  from '../../assets/img/logos/gigabyte-Logo.png'
import  logo6  from '../../assets/img/logos/HyperX-logo.png'
import  logo7  from '../../assets/img/logos/Kingston-Logo.png'
import  logo8  from '../../assets/img/logos/Logitech-logo.png'
import  logo9  from '../../assets/img/logos/msi-logo.png'



export const HomeLogos = () =>{
    return(
        <div className='containerLogos'>
            <div className='divLogos'><img src={logo1} alt=""/></div>
            <div className='divLogos'><img src={logo2} alt=""/></div>
            <div className='divLogos'><img src={logo3} alt=""/></div>
            <div className='divLogos'><img src={logo4} alt=""/></div>
            <div className='divLogos'><img src={logo5} alt=""/></div>
            <div className='divLogos'><img src={logo6} alt=""/></div>
            <div className='divLogos p-4'><img src={logo7} alt=""/></div>
            <div className='divLogos p-3'><img src={logo8} alt=""/></div>
            <div className='divLogos'><img src={logo9} alt=""/></div>
        </div>
    );
}