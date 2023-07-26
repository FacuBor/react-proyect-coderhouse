
import { CarouselHome } from '../Carousel/CarouselHome'
import './Home.scss'



export const Home = () =>{
    return(
        <div className='homeBody'>
            <div className='home-container'>

                <h1 className='mt-2 mb-4 text-secondary'>Welcome to the home section</h1>


                <div className='carouselContainer '>
                    <CarouselHome/> 
                </div>


            </div>
        </div>
    )
}