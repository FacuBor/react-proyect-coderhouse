import './Carouselhome.scss';
import { useState, useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../Loader/Loader';

export const CarouselHome =()=>{
    const { products, loading } = useProducts();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            randomSlide()
        }, 3000)
        return ()=> clearInterval(interval);
    },[products]);

    const randomSlide = ()=>{
        let randomIndex = currentIndex;
        while (randomIndex === currentIndex){
            randomIndex = Math.floor(Math.random() * products.length)
        }
        setCurrentIndex(randomIndex)
    }
    const nextSlide = () => {
        randomSlide()
    }
    const prevSlide = () => {
        randomSlide()
    }

    if(loading){
        return <Loader/>
    };
    return (
        <div className="carousel-container">
            <div className='carousel-detail-container'>
                <div className='carousel-image-container  row-image'>
                    <img src={products[currentIndex].img} alt={`Image ${currentIndex + 1}`} className="imgCarousel" />
                </div>
                <h3 className='row-title m-0  text-secondary'>{products[currentIndex].nombre}</h3>
            </div>
            <button onClick={prevSlide} className="btn-prev">P</button>
            <button onClick={nextSlide} className="btn-next">N</button>
        </div>
    );
};
