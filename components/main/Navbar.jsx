"use client";
import { Socials } from "@/constatnts";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={slideInFromTop(1.2)}
			className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"
		>
			<div className="w-full h-full flex flex-row items-center justify-center md:justify-between m-auto px-[10px]">
				<Link
					href={"#about-me"}
					className="h-auto w-auto flex flex-row items-center"
				>
					<span className="font-bold text-xl ml-[10px] hidden md:block text-gray-300">
						Taher Badri
					</span>
				</Link>

				<div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
					<div className="flex items-center justify-around w-full text-sm h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
						<a href="#about-me" className="cursor-pointer">
							About me
						</a>
						<a href="#skills" className="cursor-pointer">
							Skills
						</a>
						<a href="#projects" className="cursor-pointer">
							Projects
						</a>
					</div>
				</div>

				<div className="hidden md:flex flex-row gap-5">
					{Socials.map((social) => (
						<Link
							key={social.name}
							href={social.href}
							className="text-white text-lg"
						>
							{social.src}
						</Link>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
