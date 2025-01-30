import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import cover from '../../assets/cover.png';

const Header = () => {
    const imgRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
        if (isLoaded) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, scale: 1.2 }, // Start slightly zoomed out
                { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' } // Fade in and zoom in
            );
        }
    }, [isLoaded]);

    return (
        <div className="relative">
            <img
                ref={imgRef}
                src={cover}
                alt="Header Cover"
                className="w-full h-screen object-cover"
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default Header;
