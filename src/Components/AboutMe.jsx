import React from 'react';
import naeeim from "../assets/naeeim.jpg";
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
    return (
        <div id="AboutMe" className='py-20 px-5 md:px-0 flex flex-col md:flex-row gap-30 items-center justify-evenly'>
            {/* image div */}
            <div data-aos="fade-right">
                <img src={naeeim} className='h-[500px] rounded-2xl' alt="Profile" />
            </div>

            {/* text div */}
            <div data-aos="fade-left" className='md:w-3/6 w-full'>
                <h1 className='text-5xl font-bold mb-10'>
                    About Me
                </h1>
                <p className='text-2xl text-gray-500 leading-relaxed text-justify'>
                    I’m a passionate MERN stack developer with a strong foundation in data structures and algorithms, having solved 500+ problems across platforms like Codeforces, CodeChef, and LeetCode. While I’ve shifted my focus to front-end development with React, I also bring solid knowledge of backend technologies. I take pride in writing clean, maintainable code and enjoy tackling complex challenges as part of a team. I’m actively seeking full-time opportunities where I can contribute, grow, and work with the latest technologies.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;