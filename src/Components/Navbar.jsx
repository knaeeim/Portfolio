import React, { useEffect, useState } from "react";
import logo from "../assets/KBNaeeim.png";
import { HashLink } from "react-router-hash-link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { div } from "motion/react-client";

const Navbar = () => {
    const [activeId, setActiveId] = useState("");
    console.log(activeId);

    useEffect(() => {
        const sections = document.querySelectorAll("div[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // console.log("abcd");
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this value as needed
            }
        );
        sections.forEach((div) => observer.observe(div));

        return () => {
            sections.forEach((div) => observer.unobserve(div));
        };
    }, []);

    const navItems = (
        <>
            <li>
                <HashLink
                    smooth
                    to="#Home"
                    className={
                        activeId === "Home"
                            ? "border-b-2 border-pink-600 mx-5"
                            : "mx-5"
                    }>
                    Home
                </HashLink>
            </li>
            <li>
                <HashLink
                    smooth
                    to="#AboutMe"
                    className={
                        activeId === "AboutMe"
                            ? "border-b-2 border-pink-600 mx-5"
                            : "mx-5"
                    }>
                    About
                </HashLink>
            </li>
            <li>
                <HashLink
                    smooth
                    to="#Project"
                    className={
                        activeId === "Project"
                            ? "border-b-2 border-pink-600 mx-5"
                            : "mx-5"
                    }>
                    Projects
                </HashLink>
            </li>
        </>
    );

    return (
        <div className="bg-gray-800 2xl:max-w-[1680px] xl:max-w-7xl md:max-w-3xl mx-auto">
            <div className="flex py-2 text-white shadow-sm top-0 sticky z-50 2xl:px-20 lg:px-16 md:px-12 px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src={logo} className="w-full h-12" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
                <div className="navbar-end">
                    <HashLink smooth to="#Contact" className="btn">
                        <BsFillTelephoneFill /> Contact Me
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
