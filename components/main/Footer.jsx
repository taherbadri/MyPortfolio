import React from "react";
import {
	RxDiscordLogo,
	RxGithubLogo,
	RxInstagramLogo,
	RxTwitterLogo,
	RxLinkedinLogo,
} from "react-icons/rx";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
			<div className="w-full flex flex-col items-center justify-center m-auto">
				<div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
						{/* <div className="font-bold text-[16px]">Community</div> */}

						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxGithubLogo />
							<Link href={"https://github.com/taherbadri"}>
								<span className="text-[15px] ml-[6px]">Github</span>
							</Link>
						</p>
					</div>
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxLinkedinLogo />
							<Link href={"https://www.linkedin.com/in/taherbadri"}>
								<span className="text-[15px] ml-[6px]">LinkedIn</span>
							</Link>
						</p>
					</div>
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
						{/* <div className="font-bold text-[16px]">About</div>
						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<span className="text-[15px] ml-[6px]">Learning about me</span>
						</p> */}
						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<span className="text-[15px] ml-[6px]">
								badri.taher@yahoo.com
							</span>
						</p>
					</div>
				</div>

				<div className="mb-[20px] text-[15px] text-center">
					&copy; Taher Badri {new Date().getFullYear()} All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
