import React from "react";
import firstImage from "../assets/Project-1-images/1.png";
import secondImage from "../assets/Project-1-images/2.png";
import thirdImage from "../assets/Project-1-images/3.png";
import fourthImage from "../assets/Project-1-images/4.png";
import secFirst from "../assets/Second Project/2.png";
import thirdFirst from "../assets/Project-3/1.png";
import { Link } from "react-router";

const Projects = () => {
    const images = [firstImage, secondImage, thirdImage, fourthImage];

    return (
        <div id="Project" className="py-20 px-5 md:px-0">
            <div className="md:w-3/5 w-full mx-auto">
                <h1 className="md:text-5xl text-4xl font-bold text-center">
                    Project that I built
                </h1>
                <p className="md:text-2xl text-lg text-gray-700 text-center mt-10">
                    I have built several projects using React, Node.js,
                    Express.js, and MongoDB. You can find my projects on my
                    GitHub profile. Here are a few highlights:
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly items-center mt-16">
                {/* image carousel */}
                <div data-aos="fade-right" className="md:w-[43%] w-full flex justify-between items-center rounded-2xl overflow-hidden">
                    <img className="hover:scale-105 transition duration-300 h-[400px] object-cover" src={images[0]} alt="" />
                </div>

                <div data-aos="fade-left" className="md:w-[43%] w-full md:pl-10 pt-10 md:pt-0">
                    <h2 className="text-3xl font-semibold">
                        Project Name:{" "}
                        <span className="text-blue-500">Khaddo Sheba</span>
                    </h2>
                    <p className="text-lg text-gray-700 text-justify mt-5">
                        This is a complete full-stack food donation platform that connects food donors and requesters. The project provides a smooth user experience, efficient food management system, and secure private routes. The goal is to help reduce food waste and promote sharing through a modern, responsive, and recruiter-friendly web application.
                    </p>
                    <p className="text-lg text-gray-700 text-justify mt-5">
                        This project is a full-stack application built with
                        React, Node.js, Express.js, and MongoDB. It features
                        user authentication, CRUD operations, and a responsive
                        design.
                    </p>
                    <div className="flex md:flex-nowrap flex-wrap justify-start items-center gap-2 mt-10">
                        <a href="https://github.com/knaeeim/KhaddoShbea-Client" target="_blank" className="ml-5 btn">View Client Code</a>
                        <a href="https://github.com/knaeeim/Khaddo-Sheba-Server" target="_blank" className="ml-5 btn bg-pink-600 text-white">View Server Code</a>
                        <a href="https://assignment-11-e46ad.web.app/" target="_blank" className="ml-5 btn">Live Link</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-evenly items-center mt-32">
                {/* image carousel */}
                <div data-aos="fade-left" className="md:w-[43%] w-full flex justify-between items-center rounded-2xl overflow-hidden">
                    <img className="hover:scale-105 transition duration-300 h-[400px] object-cover" src={secFirst} alt="" />
                </div>

                <div data-aos="fade-right" className="md:w-[43%] w-full md:pr-10 pt-10 md:pt-0">
                    <h2 className="text-3xl font-semibold">
                        Project Name:{" "}
                        <span className="text-blue-500">Flexlance</span>
                    </h2>
                    <p className="text-lg text-gray-700 text-justify mt-5">
                        This is a complete full-stack food donation platform that connects food donors and requesters. The project provides a smooth user experience, efficient food management system, and secure private routes. The goal is to help reduce food waste and promote sharing through a modern, responsive, and recruiter-friendly web application.
                    </p>
                    <p className="text-lg text-gray-700 text-justify mt-5">
                        This project is a full-stack application built with
                        React, Node.js, Express.js, and MongoDB. It features
                        user authentication, CRUD operations, and a responsive
                        design.
                    </p>
                    <div className="flex md:flex-nowrap flex-wrap justify-start items-center gap-5 mt-10">
                        <a href="https://github.com/knaeeim/flexlance" className="ml-5 btn">View Client Code</a>
                        <a href="https://github.com/knaeeim/flexlance-server" className="ml-5 btn bg-pink-600 text-white">View Server Code</a>
                        <a href="https://flexlance-auth.web.app/" className="ml-5 btn">Live Link</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly items-center mt-32">
                {/* image carousel */}
                <div data-aos="fade-right" className="md:w-[43%] w-full flex justify-between items-center rounded-2xl overflow-hidden">
                    <img className="hover:scale-105 transition duration-300 h-[400px] object-cover" src={thirdFirst} alt="" />
                </div>

                <div data-aos="fade-left" className="md:w-[43%] w-full md:pl-10 pt-10 md:pt-0">
                    <h2 className="text-3xl font-semibold">
                        Project Name:{" "}
                        <span className="text-blue-500">DocTime</span>
                    </h2>
                    <p className="text-lg text-gray-700 text-justify mt-5">
                        This is a complete full-stack food donation platform that connects food donors and requesters. The project provides a smooth user experience, efficient food management system, and secure private routes. The goal is to help reduce food waste and promote sharing through a modern, responsive, and recruiter-friendly web application.
                    </p>
                    <p className="text-lg text-gray-700 text-justify mt-5">
                        This project is a full-stack application built with
                        React, Node.js, Express.js, and MongoDB. It features
                        user authentication, CRUD operations, and a responsive
                        design.
                    </p>
                    <div className="flex md:flex-nowrap flex-wrap justify-start items-center gap-5 mt-10">
                        <a href="https://github.com/knaeeim/docTime-Pro" className="ml-5 btn">View Client Code</a>
                        <a href="https://github.com/knaeeim/doctime-server" className="ml-5 btn bg-pink-600 text-white">View Server Code</a>
                        <a href="https://doctime-pro-updated.netlify.app/" className="ml-5 btn">Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
