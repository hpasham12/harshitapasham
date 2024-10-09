import React from "react";

const Hero = () => {
    return (
        <>
            <section id="Hero" className="Hero mb-8 pt-16">
                <div className="Hero-wrapper flex md:flex-row flex-col gap-8 items-center mx-8">
                    <img className="md:w-1/2" src="./logo512.png" alt="to fill later"/>
                    <div className="Hero-text md:w-1/2 flex flex-col gap-4 justify-center bg-[#a993f0]/50 rounded-md p-4 h-min">
                        <div className="">
                            <span>Hi, I'm Harshita!</span>
                        </div>
                        <div className="">
                            <span>Welcome to my website! It's a work in progress.</span>
                        </div>
                        <div className="">
                            <span>I'm a software engineer with more than a year of full-time developer experience and three 
                                previous internships in both frontend and backend development.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;