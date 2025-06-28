import React, { useState } from "react";
import firstImage from "../assets/Project-1-images/1.png";
import thirdImage from "../assets/Project-1-images/3.png";
import secFirst from "../assets/Second Project/2.png";
import secSecond from "../assets/Second Project/1.png";
import thirdFirst from "../assets/Project-3/1.png";
import thirdSecond from "../assets/Project-3/2.png";
import { Link } from "react-router";
import ProjectModal from "./ProjectModal";
import { Features } from "tailwindcss";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            id: 1,
            name: "Khaddo Sheba",
            images: [firstImage, thirdImage],
            description1:
                "This is a complete full-stack food donation platform that connects food donors and requesters. The project provides a smooth user experience, efficient food management system, and secure private routes. The goal is to help reduce food waste and promote sharing through a modern, responsive, and recruiter-friendly web application.",
            description2:
                "Built with React, Node.js, Express.js, and MongoDB, featuring authentication, CRUD, and a responsive design.",
            features: [
                "📦 Add & Manage Donated Foods (private)",
                "🔍 Search & Sorting by food name and expire date",
                "💬 Food Request System with modal form and status change",
                "🌐 JWT-Protected Private Routes",
                "🎨 Fully Responsive: Optimized for mobile, tablet, and desktop",
                "⚡ Framer Motion & Lottie animations for smooth user experience",
                "🔄 Layout Toggle (2-column & 3-column switch in Available Foods)",
                "📊 TanStack Query for API data handling and mutations",
                "✅ Secure Env Variables for Firebase & MongoDB",
            ],
            techStack: {
                frameworks: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
                        name: "React",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg",
                        name: "React Router",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                        name: "Tailwind CSS",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
                        name: "Express.js",
                    },
                ],
                languages: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                        name: "JavaScript",
                    },
                ],
                otherTools: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
                        name: "MongoDB",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                        name: "Git",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                        name: "GitHub",
                    },
                ],
            },
            clientCode: "https://github.com/knaeeim/KhaddoShbea-Client",
            serverCode: "https://github.com/knaeeim/Khaddo-Sheba-Server",
            liveLink: "https://assignment-11-e46ad.web.app/",
            reverse: false,
        },
        {
            id: 2,
            name: "Flexlance",
            images: [secFirst, secSecond],
            description1:
                "Freelancing platform with job posting and application system, featuring auth and role-based access.",
            description2:
                "Built with React, Node.js, Express.js, and MongoDB, with modern UI and solid UX.",
            features: [
                "✅ Google login & email/password authentication with strong validation",
                "🛡️ Protected routes for secure access control",
                "📝 Post, update, and delete freelance tasks easily",
                "📊 Real-time bid count tracking with live visual updates",
                "🎨 Modern, responsive UI with featured posts and smooth animations",
                "🌙 Dark mode & light mode toggle for theme flexibility",
                "🔢 Dynamic homepage stats with counting animations",
                "📬 Fetch and display real-time user info from database",
                "💼 Tasks show budget, category, and posting date details",
            ],

            techStack: {
                frameworks: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
                        name: "React",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg",
                        name: "React Router",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                        name: "Tailwind CSS",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
                        name: "Express.js",
                    },
                ],
                languages: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                        name: "JavaScript",
                    },
                ],
                otherTools: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
                        name: "MongoDB",
                    },
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
                ],
            },
            clientCode: "https://github.com/knaeeim/flexlance",
            serverCode: "https://github.com/knaeeim/flexlance-server",
            liveLink: "https://flexlance-auth.web.app/",
            reverse: true,
        },
        {
            id: 3,
            name: "DocTime",
            images: [thirdFirst, thirdSecond],
            description1:
                "Doctor appointment booking platform supporting registration, scheduling, and doctor dashboard.",
            description2:
                "Built with React, Node.js, Express.js, and MongoDB, featuring authentication and a responsive design.",
            features: [
                "🔍 Search by doctor name directly from the homepage",
                "👨‍⚕️ Displays doctor profiles (initially 6)",
                "📈 Patient counter section with animation (React CountUp)",
                "📄 Individual doctor detail pages with full profile info and appointment booking",
                "📅 Appointment status page with fees shown in Recharts graph",
                "🗂️ History of appointments and option to cancel",
                "✅ Secure appointment booking and status management",
                "🚫 Graceful 404 page for invalid URLs",
                "🎨 Clean, modern, fully responsive design",
            ],

            techStack: {
                frameworks: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
                        name: "React",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg",
                        name: "React Router",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                        name: "Tailwind CSS",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
                        name: "Express.js",
                    },
                ],
                languages: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                        name: "JavaScript",
                    },
                ],
                otherTools: [
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
                        name: "MongoDB",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                        name: "Git",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                        name: "GitHub",
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
                        name: "Vercel",
                    },
                ],
            },
            clientCode: "https://github.com/knaeeim/docTime-Pro",
            serverCode: "#",
            liveLink: "https://doctime-pro-updated.netlify.app/",
            reverse: false,
        },
    ];

    return (
        <div id="Project" className="py-20 px-5 md:px-0">
            <div className="md:w-3/5 w-full mx-auto">
                <h1 className="md:text-5xl text-4xl font-bold text-center">
                    Projects that I built
                </h1>
                <p className="md:text-2xl text-lg text-gray-700 text-center mt-10">
                    I have built several projects using React, Node.js,
                    Express.js, and MongoDB. Here are a few highlights:
                </p>
            </div>

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`flex flex-col ${
                        project.reverse ? "md:flex-row-reverse" : "md:flex-row"
                    } justify-evenly items-center ${
                        index === 0 ? "mt-16" : "md:mt-32 mt-24"
                    }`}>
                    {/* Image */}
                    <div
                        data-aos={project.reverse ? "fade-left" : "fade-right"}
                        className="md:w-[43%] w-full flex justify-between items-center rounded-2xl overflow-hidden">
                        <img
                            className="hover:scale-105 transition duration-300 h-[400px] object-cover max-w-full w-full"
                            src={project.images[0]}
                            alt={project.name}
                        />
                    </div>

                    {/* Text */}
                    <div
                        data-aos={project.reverse ? "fade-right" : "fade-left"}
                        className="md:w-[43%] w-full md:px-10 pt-10 md:pt-0">
                        <h2 className="text-3xl font-semibold">
                            Project Name:{" "}
                            <span className="text-blue-500">
                                {project.name}
                            </span>
                        </h2>
                        <p className="text-lg text-gray-700 text-justify mt-5">
                            {project.description1}
                        </p>
                        <p className="text-lg text-gray-700 text-justify mt-5">
                            {project.description2}
                        </p>
                        <div className="flex justify-start items-center gap-2 mt-10">
                            <label
                                htmlFor="project_modal"
                                className="ml-5 btn cursor-pointer"
                                onClick={() => setSelectedProject(project)}>
                                View Details
                            </label>
                        </div>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    closeModal={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default Projects;
