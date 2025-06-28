import React from "react";
import naeeim from "../assets/naeeim.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

const Banner = () => {
    return (
        <div
            id="Home"
            className="md:py-20 py-8 px-5 md:px-0 flex flex-col-reverse md:flex-row justify-center items-center gap-10">
            {/* text div */}
            
            <div data-aos="fade-right"  className="md:w-[60%] space-y-3 text-center md:text-left">
                <h1 className="md:text-6xl text-4xl font-bold text-white">
                    <Typewriter
                        words={["Md. Khairul Bashar"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={300}
                        deleteSpeed={300}
                    />
                </h1>
                <p className="text-2xl text-gray-300 mt-5">
                    MERN Stack Developer
                </p>
                <p className="text-lg text-gray-400 mt-3 md:w-[75%] w-full">
                    I specialize in building scalable, high-performance web
                    applications using modern technologies and love to write clean,
                    maintainable code.
                </p>
                <p className="text-lg text-gray-400 mt-2">
                    Let’s connect and bring impactful ideas to life.
                </p>
                <div className="flex md:justify-start justify-center gap-4">
                    <a href="/src/assets/Naeeim's CV(J).pdf" download>
                        <button className="btn bg-pink-600 mt-5 border-none">
                            <FaDownload /> Download Resume
                        </button>
                    </a>
                </div>
                <div className="flex md:justify-start justify-center gap-4 mt-5">
                    <a href="https://www.linkedin.com/in/khairulnaeeim/" target="_blank" className="text-blue-700"><FaLinkedin size={30}/></a>
                    <a href="https://github.com/knaeeim" target="_blank" className="text-gray-500"><FaGithub size={30}/></a>
                </div>
            </div>

            {/* image div */}
            <motion.div
                data-aos="fade-left"
                animate={{
                    scale: [1, 1.05, 1],
                    x: [0, 2, 0],
                    opacity: [1, 0.8, 1],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    opacity: [1, 0.8, 1],
                    repeatType: "reverse",
                }}>
                <img
                    src={naeeim}
                    className="md:h-[500px] h-[450px] max-w-full rounded-2xl object-cover shadow-lg"
                    alt="Profile"
                />
            </motion.div>
        </div>
    );
};

export default Banner;
