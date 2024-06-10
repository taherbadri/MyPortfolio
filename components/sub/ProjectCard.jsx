import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ src, title, description, href }) => {
	return (
		<div className="relative overflow-hidden rounded-lg shadow-lg border cursor-pointer border-[#2A0E61] h-full">
			<a href={href} target="_blank">
				<Image
					src={src}
					alt={title}
					width={500}
					height={500}
					className="w-full object-contain"
				/>

				<div className="relative flex flex-col items-center p-4">
					<h1 className="text-xl md:text-2xl font-semibold text-white">
						{title}
					</h1>
					<p className="mt-2 text-gray-300">{description}</p>

					{/* <a
					href="href"
					className="py-2 mt-2 w-full button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[200px] items-start"
				>
					explore
				</a> */}
				</div>
			</a>
		</div>
	);
};

export default ProjectCard;
