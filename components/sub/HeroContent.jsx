// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
// 	slideInFromLeft,
// 	slideInFromRight,
// 	slideInFromTop,
// } from "../../utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// const HeroContent = () => {
// 	return (
// 		<motion.div
// 			initial="hidden"
// 			animate="visible"
// 			className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
// 		>
// 			<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
// 				<motion.div
// 					className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
// 					variants={slideInFromTop(0.5)}
// 				>
// 					<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
// 					<h1 className="welcome-text px-2 text-white text-[13px]">
// 						Full-stack Developer Extraordinaire
// 					</h1>
// 				</motion.div>
// 				<motion.div
// 					variants={slideInFromLeft(0.5)}
// 					className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
// 				>
// 					<span>
// 						<p>
// 							Providing
// 							<span className="text-transparent mx-2 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
// 								the best
// 							</span>
// 						</p>
// 						project experience
// 					</span>
// 				</motion.div>
// 				<motion.p
// 					variants={slideInFromLeft(0.8)}
// 					className="text-lg text-gray-400 my-5 mx-w-[600px]"
// 				>
// 					I'm Taher Badri, a passionate full-stack developer with a knack for
// 					turning ideas into reality. From crafting pixel-perfect frontends with
// 					HTML, CSS, and JavaScript to architecting robust backends using
// 					Node.js, Express.js, and MongoDB, I thrive on bringing projects to
// 					life.
// 				</motion.p>
// 				<motion.a
// 					variants={slideInFromLeft(1)}
// 					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
// 				>
// 					Learn More!
// 				</motion.a>
// 			</div>
// 			<motion.div
// 				variants={slideInFromRight(0.8)}
// 				className="w--full h-full flex items-center justify-center"
// 			>
// 				<Image
// 					src={"/mainIconsdark.svg"}
// 					alt="work icons"
// 					height={650}
// 					width={650}
// 				/>
// 			</motion.div>
// 		</motion.div>
// 	);
// };

// export default HeroContent;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 mt-[8rem] md:mt-10 lg:mt-40 w-full z-[20]"
		>
			<div className="flex flex-col gap-3 justify-center md:m-auto text-start">
				<motion.div
					className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
					variants={slideInFromTop(0.5)}
				>
					<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
					<h1 className="welcome-text px-2 text-white text-[13px]">
						Full-stack Developer Extraordinaire
					</h1>
				</motion.div>
				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-2 md:mt-6 text-3xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
				>
					<span>
						<p>
							Providing
							<span className="text-transparent mx-2 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
								the best
							</span>
						</p>
						project experience
					</span>
				</motion.div>
				<motion.p
					variants={slideInFromLeft(0.8)}
					className="text-base lg:text-lg text-gray-400 my-5 mx-w-[600px]"
				>
					I'm Taher Badri, a passionate full-stack developer with a knack for
					turning ideas into reality. From crafting pixel-perfect frontends with
					HTML, CSS, and JavaScript to architecting robust backends using
					Node.js, Express.js, and MongoDB, I thrive on bringing projects to
					life.
				</motion.p>
				<motion.a
					variants={slideInFromLeft(1)}
					className="py-2 w-full button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[200px]"
				>
					Learn More!
				</motion.a>
			</div>
			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full lg:w-auto h-full flex items-center justify-center mt-10 lg:mt-0"
			>
				<Image
					src={"/mainIconsdark.svg"}
					alt="work icons"
					height={650}
					width={650}
				/>
			</motion.div>
		</motion.div>
	);
};

export default HeroContent;
