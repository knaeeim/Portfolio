import React from "react";

const ProjectModal = ({ project, closeModal }) => {
    if (!project) return null;

    return (
        <>
            <input
                type="checkbox"
                id="project_modal"
                className="modal-toggle"
                checked
                readOnly
            />
            <div className="modal modal-open">
                <div className="modal-box max-w-5xl w-full bg-gray-800 text-white">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        {project.name}
                    </h2>
                    <img
                        src={project.images[0]}
                        alt={`Screenshot of ${project.name}`}
                        className="rounded-lg object-cover w-full h-full"
                    />
                    <div className="my-8 text-center">
                        <p className="text-white mb-4">
                            {project.description1}
                        </p>
                        <p className="text-white mb-8">
                            {project.description2}
                        </p>
                    </div>
                    <img
                        src={project.images[1]}
                        alt={`Screenshot of ${project.name}`}
                        className="rounded-lg object-cover w-full h-full"
                    />
                    <h3 className="text-3xl text-center font-semibold my-8">
                        Tech Stack
                    </h3>
                    <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-10">
                        <div>
                            <h4 className="font-medium mb-1">Frameworks & Libraries</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.frameworks.slice(0, 4).map((item) => (
                                    <img
                                        key={item.name}
                                        src={item.src}
                                        alt={item.name}
                                        className="h-10 w-10"
                                        title={item.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.languages.slice(0, 4).map((item) => (
                                    <img
                                        key={item.name}
                                        src={item.src}
                                        alt={item.name}
                                        className="h-10 w-10"
                                        title={item.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">Other Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.otherTools.slice(0, 4).map((item) => (
                                    <img
                                        key={item.name}
                                        src={item.src}
                                        alt={item.name}
                                        className="h-10 w-10"
                                        title={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl text-center font-semibold my-8">
                        Features
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-left max-w-3xl mx-auto">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap justify-center gap-4 mt-14">
                        <a
                            href={project.clientCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn border-none">
                            Client Code
                        </a>
                        <a
                            href={project.serverCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-pink-600 text-white border-none">
                            Server Code
                        </a>
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn border-none">
                            Live Link
                        </a>
                    </div>

                    <div className="modal-action mt-4">
                        <label
                            onClick={closeModal}
                            htmlFor="project_modal"
                            className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
