import React, { useState, useEffect } from 'react';
import './Carouselhome.scss';

export const CarouselHome =()=>{

    const images = [
        '/src/assets/img/gabinetes/gabinete__coolermaster.png',
        '/src/assets/img/placas de video/asus__Rog--4070ti.png',
        '/src/assets/img/procesadores/coreI9.png',
        '/src/assets/img/perifericos/monitores/MonitorCurvoOdysseyArk--165hz--55.png',
        '/src/assets/img/perifericos/mouse/logitech--superlight--Red.png',
        '/src/assets/img/fuentes/corsair__1200w.png',
        '/src/assets/img/almacenamiento/penDriveSanDisk 64.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        // Limpieza del intervalo cuando se desmonta el componente
        return () => clearInterval(interval);
        }, [images.length]);
    
    return (
        <div className="carousel-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
            <button onClick={prevSlide} className="btn-prev">P</button>
            <button onClick={nextSlide} className="btn-next">N</button>
        </div>
    );
};
