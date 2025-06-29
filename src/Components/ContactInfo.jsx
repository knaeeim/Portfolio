import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div id="Contact" className="py-20 2xl:px-20 lg:px-16 md:px-12 px-3">
            <div className="w-4/6 mx-auto">
                <h1 className="md:text-5xl text-3xl font-bold text-center text-white">
                    Get in Touch
                </h1>
                <p className="md:text-2xl text-lg text-gray-400 text-center mt-10">
                    I’m always open to new opportunities and collaborations. Feel free to reach out!
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-16">
                {/* Contact details */}
                <div className="space-y-5 text-gray-300">
                    <p className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-red-500" />
                        Dhaka, Bangladesh
                    </p>
                    <p className="flex items-center gap-3">
                        <FaEnvelope className="text-blue-500" />
                        kmnaeeim@gmail.com
                    </p>
                    <p className="flex items-center gap-3">
                        <FaPhoneAlt className="text-green-500" />
                        +8801712854941
                    </p>
                    <p className="flex items-center gap-3">
                        <FaWhatsapp className="text-green-600" />
                        +8801712854941
                    </p>
                </div>

                {/* Divider */}
                <div className="divider divider-horizontal text-white hidden md:flex"></div>

                {/* Social links */}
                <div className="space-y-5 text-gray-300">
                    <p className="flex items-center gap-3">
                        <FaLinkedin className="text-blue-600" />
                        <a
                            href="https://www.linkedin.com/in/khairulnaeeim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                        >
                            LinkedIn
                        </a>
                    </p>
                    <p className="flex items-center gap-3">
                        <FaGithub className="text-gray-500" />
                        <a
                            href="https://github.com/knaeeim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                        >
                            GitHub
                        </a>
                    </p>
                    <p className="flex items-center gap-3">
                        <FaFacebook className="text-blue-500" />
                        <a
                            href="https://facebook.com/k.naeeim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                        >
                            Facebook
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
