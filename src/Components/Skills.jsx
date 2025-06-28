import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Skills = () => {
    const frameWorks = [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
            name: "React",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
            name: "MongoDB",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            name: "Tailwind CSS",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
            name: "Node.js",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
            name: "Express.js",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg",
            name: "React Router",
        },
    ];

    const languages = [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            name: "JavaScript",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
            name: "Python",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            name: "C++",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg",
            name: "C",
        },
    ];

    const otherTools = [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            name: "Git",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            name: "GitHub",
        },

        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
            name: "Firebase",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
            name: "Vercel",
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg",
            name: "Axios",
        },
    ];

    return (
        <div id="Skills" className="py-20 px-5 md:px-10 text-center">
            {/* Main headline */}
            <h1 className="text-5xl font-bold mb-8 text-white">
                Key Technologies & Languages
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto mb-16">
                I leverage a modern tech stack to build scalable, high-quality
                applications and love learning new technologies to solve
                challenging problems.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-start gap-10">
                {/* Frameworks */}
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-10 text-blue-500">
                        Frameworks & Tools
                    </h2>
                    <div
                        data-aos="fade-right"
                        className="flex flex-wrap justify-center gap-8">
                        {frameWorks.map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.name}
                                title={logo.name}
                                className="w-20 h-20 object-contain hover:scale-110 transition duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-10 text-blue-400">
                        Languages
                    </h2>
                    <div
                        data-aos="fade-left"
                        className="flex flex-wrap justify-center gap-8">
                        {languages.map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.name}
                                title={logo.name}
                                className="w-20 h-20 object-contain hover:scale-110 transition duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Other Tools */}
            <div className="mt-16">
                <h2 className="text-3xl font-semibold mb-10 text-green-400">
                    Other Tools
                </h2>
                <div
                    data-aos="fade-up"
                    className="flex flex-wrap justify-center gap-8">
                    {otherTools.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.src}
                            alt={logo.name}
                            title={logo.name}
                            className="w-20 h-20 object-contain hover:scale-110 transition duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
