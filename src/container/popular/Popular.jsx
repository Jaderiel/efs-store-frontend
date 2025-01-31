import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import item1 from "../../assets/CJR-843.jpg";
import item2 from "../../assets/CJR00354.JPG";
import item3 from "../../assets/CJR00363.JPG";

gsap.registerPlugin(ScrollTrigger);

const Popular = () => {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (section) {
            gsap.fromTo(
                section.querySelectorAll("img"),
                { opacity: 0, y: 100, scale: 0.9 }, // Start lower (y: 100px)
                {
                    opacity: 1,
                    y: 0, // Move to normal position
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%", // Starts when 85% of section is in view
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={sectionRef} className="bg-zinc-950 p-4 lg:p-10">
            <h4 className="p-4 text-white font-bold text-4xl flex items-center justify-center uppercase">Popular</h4>

            {/* Desktop Layout */}
            <div className="hidden md:flex w-full gap-8 p-4 justify-center">
                <img className="w-1/4 max-h-140 object-cover rounded-lg" src={item1} alt="" />
                <img className="w-1/4 max-h-140 object-cover rounded-lg" src={item2} alt="" />
                <img className="w-1/4 max-h-140 object-cover rounded-lg" src={item3} alt="" />
            </div>

            {/* Mobile Swiper */}
            <div className="md:hidden" ref={swiperRef}>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    speed={800} // Slows down the swipe speed to 0.8s
                    className="w-full h-full custom-swiper"
                    onSlideChange={() => {
                        gsap.fromTo(
                            ".swiper-slide-active img",
                            { opacity: 0, y: 100, scale: 0.9 }, // Start lower (y: 100px)
                            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" }
                        );
                    }}
                >
                    <SwiperSlide>
                        <img className="w-full h-full object-cover rounded-lg" src={item1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-full object-cover rounded-lg" src={item2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-full object-cover rounded-lg" src={item3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Custom Styles for Swiper */}
            <style>
                {`
                /* White arrows */
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                }

                /* White pagination dots */
                .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.7 !important;
                }

                /* Active pagination dot */
                .swiper-pagination-bullet-active {
                    background: white !important;
                    opacity: 1 !important;
                }
                `}
            </style>
        </div>
    );
};

export default Popular;
