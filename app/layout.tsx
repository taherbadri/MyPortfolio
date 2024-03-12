import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Crafting Digital Experiences: Badri's Portfolio",
	description:
		"Explore the digital playground of Taher badri, a seasoned full-stack developer specializing in web development and design. Dive into a showcase of meticulously crafted projects demonstrating proficiency in HTML, CSS, JavaScript, and a range of cutting-edge technologies. Discover innovative solutions, sleek user interfaces, and robust backend architectures—all reflecting a passion for creating impactful online experiences. Connect with [Your Name] to collaborate on your next web venture.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
			>
				<StarsCanvas />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
