import React, { useState, useEffect } from 'react';
import './Carouselhome.scss';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../Loader/Loader';

export const CarouselHome =()=>{
    const { products, loading } = useProducts()
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            const randomIndex = Math.floor(Math.random() * products.length);
            setCurrentIndex(randomIndex)
        }, 4000)

        return ()=> clearInterval(interval);

    },[products, currentIndex]);



    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    if(loading){
        return <Loader/>
    }
    
    return (
        <div className="carousel-container">
            <div className='carousel-detail-container'>
                <div className='carousel-image-container  row-image'>
                    <img src={products[currentIndex].img} alt={`Image ${currentIndex + 1}`} className="imgCarousel" />
                </div>
                <h3 className='row-title m-0 fs-3 text-secondary'>{products[currentIndex].nombre}</h3>
            </div>
            <button onClick={prevSlide} className="btn-prev">P</button>
            <button onClick={nextSlide} className="btn-next">N</button>
        </div>
    );
};
