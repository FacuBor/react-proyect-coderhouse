
import { CarouselHome } from '../Carousel/CarouselHome'
import './Home.scss'



export const Home = () =>{
    return(
        <div className='homeBody'>
            <div className='home-container'>
                <h2 className='mt-2 mb-4'>Welcome to the home section</h2>
                <div className='carouselContainer'>
                    <CarouselHome/>
                </div>
            </div>
        </div>
    )
}