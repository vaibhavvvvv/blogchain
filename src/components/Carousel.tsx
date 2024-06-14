"use client"
import { useState } from 'react';

const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.webp",
    "/5.jpg"
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="relative w-4/5 m-20 h-1/5 overflow-hidden">
            <div className="flex  m-5 px-20 overflow-x-hidden gap-3">
                <div
                    className={`w-full h-auto transition-transform duration-300 transform`}
                    // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <img
                        src={images[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        className="w-4/5 bg-cover h-200 h-4/5"
                    />
                </div>
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg z-10" onClick={prevSlide}>Prev</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg z-10" onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Carousel;
