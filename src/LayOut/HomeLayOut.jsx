import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import ContactInfo from "../Components/ContactInfo";

const HomeLayOut = () => {
    return (
        <div className=" bg-gray-800">
            <Navbar />
            <div className="bg-gray-800">
                <div className="2xl:max-w-[1680px] xl:max-w-7xl md:max-w-3xl mx-auto">
                    <Banner />
                </div>
            </div>

            <div className="bg-white">
                <div className="2xl:max-w-[1680px] xl:max-w-7xl md:max-w-3xl mx-auto">
                    {/* Add your content here */}
                    <AboutMe />
                </div>
            </div>

            <div className="bg-gray-800">
                <div className="2xl:max-w-[1680px] xl:max-w-7xl md:max-w-3xl mx-auto">
                    <Skills />
                </div>
            </div>

            <div className="bg-white">
                <div className="2xl:max-w-[1680px] xl:max-w-7xl md:max-w-3xl mx-auto">
                    {/* Add your content here */}
                    <Projects />
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="2xl:max-w-[1680px] xl:max-w-7xl md:max-w-3xl mx-auto">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
};

export default HomeLayOut;
