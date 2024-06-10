import React from "react";

const ProjectCard = ({ src, title, description, href }) => {
	return (
		<div className="relative overflow-hidden rounded-lg shadow-lg border cursor-pointer border-[#2A0E61] h-full">
			<iframe
				src={href}
				title={title}
				className="w-full h-[1080px]" // Set width to 1920px and height to maintain aspect ratio
				style={{ border: "none" }} // Optional: removes default iframe border
			/>

			<div className="relative flex flex-col items-center p-4 tracking-wide">
				<h1 className="text-xl md:text-2xl font-semibold text-white">
					{title}
				</h1>
				<h2 className="mt-2 text-white text-justify w-full">{href}</h2>
				<p className="mt-2 text-justify text-gray-300">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
