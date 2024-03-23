"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import navLinks from "@/data/nav-links.json"
import Logo from "./logo"
import dtu from "@/public/images/home/dtulogo.png"
import clsx from "clsx"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col items-stretch justify-between gap-x-14 text-slate-700 md:flex-row md:items-center md:px-20">
			<input type="checkbox" id="toggle" className="peer hidden" />
			<div className="flex items-center justify-between p-8 md:px-0">
				<a href="/" className="flex items-center gap-4">
					<Logo />
				</a>
				<label htmlFor="toggle" className="cursor-pointer md:hidden">
					<HamburgerMenuIcon className="h-8 w-8 font-extrabold text-white" />
				</label>
			</div>
			<ul className="hidden text-lg text-white font-bold flex-col border-y bg-primary shadow-sm peer-checked:flex md:flex md:flex-row md:gap-2 md:border-none md:bg-transparent md:shadow-none">
				{navLinks.map(({ link, title }) => (
					<li key={link}>
						<a
							className={clsx(
								"block px-8 py-4 transition-colors hover:text-orange-800 md:rounded-lg md:px-4 md:py-2",
								pathname === link ? "underline decoration-4 underline-offset-8 decoration-orange-200" : "",
							)}
							href={link}
						>
							{title}
						</a>
					</li>
				))}
			</ul>
			<a href="http://dtu.ac.in/" className="flex items-center gap-4">
					<Image src={dtu} alt=""className="hidden md:block w-16 h-16"/>
			</a>
		</nav>
	)
}
