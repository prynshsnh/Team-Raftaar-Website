"use client"
import { usePathname } from "next/navigation"
import navLinks from "@/data/nav-links.json"
import Logo from "./logo"
import clsx from "clsx"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col items-stretch justify-center gap-x-14 text-slate-700 md:flex-row md:items-center md:px-20">
			<input type="checkbox" id="toggle" className="peer hidden" />
			<div className="flex items-center justify-between p-8 md:px-0">
				<a href="/" className="flex items-center gap-4">
					<Logo />
				</a>
				<label htmlFor="toggle" className="cursor-pointer md:hidden">
					<HamburgerMenuIcon className="h-8 w-8" />
				</label>
			</div>
			<ul className="hidden text-lg text-white font-bold flex-col border-y bg-primary shadow-sm peer-checked:flex md:flex md:flex-row md:gap-2 md:border-none md:bg-transparent md:shadow-none">
				{navLinks.map(({ link, title }) => (
					<li key={link}>
						<a
							className={clsx(
								"block px-8 py-4 transition-colors hover:text-orange-900 md:rounded-lg md:px-4 md:py-2",
								pathname === link ? "bg-slate-100" : "",
							)}
							href={link}
						>
							{title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
