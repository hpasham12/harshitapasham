import React, { useRef } from "react";
import { WORK_EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick/lib/slider";

const Experience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section id="Experience" className="Experience mx-6 my-8">
                <h5 className="mb-4 ml-4 text-xl font-extrabold">Work Experience</h5>
                <div className="Experience-content">
                    <Slider ref={sliderRef} {...settings}>
                        {WORK_EXPERIENCE.map((item) => (
                            <ExperienceCard key={item.title} item={item} />
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default Experience;