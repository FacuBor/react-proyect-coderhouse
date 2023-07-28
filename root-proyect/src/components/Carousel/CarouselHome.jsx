import React, { useState, useEffect } from 'react';
import './Carouselhome.scss';
import { imagenes } from './CarouselImage'; // array con imagenes
import { useProducts } from '../../hooks/useProducts';

export const CarouselHome =()=>{
    const { products, loading } = useProducts()
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 4000);
        // Limpieza del intervalo cuando se desmonta el componente
        return () => clearInterval(interval);
        }, [imagenes.length]);
    
    return (
        <div className="carousel-container">
            <img src={imagenes[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slide" />
            <button onClick={prevSlide} className="btn-prev">P</button>
            <button onClick={nextSlide} className="btn-next">N</button>
        </div>
    );
};
