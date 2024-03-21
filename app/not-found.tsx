/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container"
import Link from "next/link"

export default function NotFound() {
	return (
		<Container className="flex max-w-2xl flex-col text-slate-200 items-center text-center">
			<h1 className="title mb-8">
				We couldn’t find the page you’re looking for.
			</h1>
			<p className="text-lg">
				You can reach out to a
				team-member on the <Link href="/team" className="text-primary bold underline">Team Raftaar Members</Link>.
			</p>
			<Link
				className="mt-8 rounded-lg border border-orange-300 bg-primary px-6 py-2 font-bold text-white shadow-sm"
				href="/"
			>
				Go home
			</Link>
		</Container>
	)
}
