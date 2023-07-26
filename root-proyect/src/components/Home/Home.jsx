import { CarouselHome } from '../Carousel/CarouselHome'
import { HomeLogos } from './HomeLogos'
import './Home.scss'



export const Home = () =>{
    return(
        <div className='homeBody'>
            <div className='home-container'>

                <CarouselHome/>  

                <HomeLogos />
                
            </div>
        </div>
    )
}