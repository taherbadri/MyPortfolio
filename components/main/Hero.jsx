import React from "react";
import HeroContent from "@/components/sub/HeroContent";
const Hero = () => {
	return (
		<div className="relative flex flex-col h-full w-full">
			<video
				autoPlay
				muted
				loop
				className="rotate-180 absolute top-[-30rem] md:top-[-18rem] left-0 z-[1] w-full h-full object-cover"
			>
				<source src="/blackhole.webm" type="video/webm" />
			</video>
			<HeroContent />
		</div>
	);
};

export default Hero;
