import React, { useRef } from "react"
import { WorkExpCard } from "./workExpCard"
import Slider from "react-slick";

export function WorkExp(){
    const sliderRef = useRef();

    const SETTINGS = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideRight = ()=>{
        sliderRef.current.slickNext();
    };

    const slideLeft = ()=>{
        sliderRef.current.slickPrev();
    }

    const WORKEXP = [
        {
            title: "Web Developer at Remax Victoria",
            date: "August 2023 - November 2023",
            responsabilities: [
                "Design and front-end development of web systems, creating intuitive and attractive interfaces using tools such as Figma for prototyping and visual design.",
                "Implementation of designs using HTML, CSS and JavaScript, ensuring the compatibility and accessibility of the system on different platforms and browsers.",
                "Close collaboration with the development team to understand and meet system requirements, optimizing user experience and system efficiency",
            ]
        },
        {
            title: "Web Developer at CONSTRUCTORA ING. NARCISO SOTO S.A. DE C.V.",
            date: "Mayo 2022 - Agosto 2022",
            responsabilities: [
                "Implementation of responsive and attractive designs using HTML, CSS and JavaScript, ensuring an intuitive user experience.",
                "Development and maintenance of server-side logic using technologies such as PHP and the framework Laravel.",
                "Integration of databases to efficiently manage system information and streamline data handling to optimize project development times within the company.",
            ]
        }
    ]
    return(
        <div className="w-full h-auto bg-gradient-to-t from-[#0c0c1d] to-[#111132]">
                <br />
                <br />
                <br />
                <br />
                <br />
            <div className="experience-container mx-12 relative max-sm:mx-3">
                <h5 className="mb-14 text-white text-[50px] tracking-[10px] font-bold max-md:text-[1.3rem] max-md:mb-[2rem]">WORK <span className="text-purple-700">EXPERIENCE</span></h5>
                <div className="experiencie-content h-auto">
                    <div className="arrow-right pb-1 right-[-0.1rem] w-[2.2rem] h-[2.2rem] flex items-center justify-center text-[#6751b9] rounded-[0.65rem] border border-solid border-[#6751b9] bg-[#130f2a] absolute top-[55%] z-10 cursor-pointer max-md:right-[-0.9rem] max-sm:right-[-0.5rem]" onClick={slideRight}>
                        <span className="material-symbols-outlined text-[2rem] font-medium">&gt;</span>
                    </div>
                    <div className="arrow-left pb-1 left-[-0.1rem] w-[2.2rem] h-[2.2rem] flex items-center justify-center text-center text-[#6751b9] rounded-[0.65rem] border border-solid border-[#6751b9] bg-[#130f2a] absolute top-[55%] z-10 cursor-pointer max-md:left-[-0.9rem] max-sm:left-[-0.5rem]" onClick={slideLeft}>
                        <span className="material-symbols-outlined text-[2rem] font-medium">&lt;</span>
                    </div>
                    <Slider ref={sliderRef} {...SETTINGS}>
                    {WORKEXP.map((item) =>(
                        <WorkExpCard key={item.card} details={item}></WorkExpCard>
                    ))}
                    </Slider>
                </div>
            </div>
                <br />
                <br />
                <br />
                <br />
        </div>
    )
}