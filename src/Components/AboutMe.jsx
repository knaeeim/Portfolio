import React from 'react';
import naeeim from "../assets/naeeim.jpg";
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
    return (
        <div id="AboutMe" className='py-20 px-5 md:px-0 flex flex-col lg:flex-row lg:gap-24 gap-10 items-center justify-evenly'>
            {/* image div */}
            
            <div data-aos="fade-up">
                <img src={naeeim} className='h-[500px] max-w-full rounded-2xl object-cover' alt="Profile" />
            </div>

            {/* text div */}
            
            <div data-aos="fade-up"  className='lg:w-3/6 w-[88%]'>
                <h1 className='text-5xl font-bold mb-10'>
                    About Me
                </h1>
                <p className='text-xl text-gray-500 leading-relaxed text-justify'>
                    I started programming in October 2023 with C and C++ at Phitron, focusing on problem solving and data structures. After successfully completing the Problem Solving Club—where I solved multiple challenging problems—I shifted my focus to web development. Since then, I’ve learned HTML, CSS, JavaScript, and React, building a variety of projects that have helped me sharpen my skills and gain practical experience. I genuinely enjoy coding because it allows me to create and bring ideas to life, which is always exciting and rewarding. Outside of programming, I’m a sports enthusiast who captained my university football team to a championship and was a runner-up in cricket. I’m also a passionate foodie, always eager to discover new and delicious flavors. Traveling and exploring new places is another hobby that keeps me inspired and motivated.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;