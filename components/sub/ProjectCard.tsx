import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-cover h-78" // Set a fixed height for the image
            />

            <div className="relative p-4 flex flex-col justify-between flex-grow">
                <h1 className="text-2xl font-semibold text-white line-clamp-2">{title}</h1>
                <p className="mt-2 text-gray-300 text-sm line-clamp-3">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
