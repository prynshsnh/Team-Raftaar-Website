import Image from "next/image"
import Container from "@/components/container"
import kaze from "@/public/images/vehicles/Kaze.png"
import mach4 from "@/public/images/vehicles/Mach4.png"
import nimbus from "@/public/images/vehicles/Nimbus.png"
import pegasus from "@/public/images/vehicles/Pegasus.png"
import eurus from "@/public/images/vehicles/Eurus.png"
import falcon from "@/public/images/vehicles/Falcon.jpg"

export default function About() {
	return (
		<Container>
            <h1 className="text-4xl font-bold font-accent mb-4 text-primary text-center">Our Mission</h1>
            <section className="text-justify text-lg text-slate-200 max-w-5xl mx-auto">
            <p className="my-1 leading-snug">We are the Human Powered Vehicle Team consisting of undergraduate students who aim to give the world an alternative solution to the present-day energy crisis.</p>
            <p className="my-1 leading-snug">We study, design, develop, and manufacture the fully-faired recumbent bikes and trikes which can reach up to the highest speeds of 60 kmph solely by human power!!! The team rigorously researches about the human-powered vehicles and uses the best possible design, the best possible techniques, and the best possible materials for manufacturing.</p>
            <p className="my-1 leading-snug">From building fairing completely from carbon fiber to incorporating the internationally acclaimed landing gear system in the vehicle, Team Raftaar is redefining the way human-powered vehicles are perceived in India. Our unique manufacturing style, innovative design, detailed analysis, and advanced use of composites have been appreciated and awarded multiple times both in National and international competitions.</p>
            <p className="my-1 leading-snug">With each passing year, we as a team are getting closer and closer to our ultimate ambition of bringing HPVs closer to the everyday commuters as a sustainable alternative to other conventional modes of transport.</p>
			</section>
			<h1 className="text-4xl font-bold font-accent mt-8 mb-4 text-primary text-center">Past Vehicles</h1>
            <div className="mt-12 grid gap-6 md:gap-12 md:grid-cols-3">
            <div
			className="flex flex-col items-center border border-zinc-500 rounded-lg bg-zinc-900 overflow-hidden">
			<Image
				src={kaze}
				alt="New"
				className="w-full h-auto object-cover object-top shadow-sm"
			/>
			<div>
				<p className="my-2 text-lg font-medium text-white justify-self-center">
					KAZE
				</p>
			</div>
		     </div>

             <div
			className="flex items-center border border-zinc-500 flex-col rounded-lg bg-zinc-900 overflow-hidden">
			<Image
				src={mach4}
				alt="New"
				className="w-full h-auto object-cover object-top shadow-sm"
			/>
			<div>
				<p className="my-2 text-lg font-medium text-white justify-self-center">
					MACH4
				</p>
			</div>
		     </div>

             <div
			className="flex items-center border border-zinc-500 flex-col rounded-lg bg-zinc-900 overflow-hidden">
			<Image
				src={nimbus}
				alt="New"
				className="w-full h-auto object-cover object-top shadow-sm"
			/>
			<div>
				<p className="my-2 text-lg font-medium text-white justify-self-center">
					NIMBUS
				</p>
			</div>
		     </div>
             <div
			className="flex items-center border border-zinc-500 flex-col rounded-lg bg-zinc-900 overflow-hidden">
			<Image
				src={pegasus}
				alt="New"
				className="w-full h-auto object-cover object-top shadow-sm"
			/>
			<div>
				<p className="my-2 text-lg font-medium text-white justify-self-center">
					PEGASUS
				</p>
			</div>
		     </div>

             <div
			className="flex items-center border border-zinc-500 flex-col rounded-lg bg-zinc-900 overflow-hidden">
			<Image
				src={eurus}
				alt="New"
				className="w-full h-auto object-cover object-top shadow-sm"
			/>
			<div>
				<p className="my-2 text-lg font-medium text-white justify-self-center">
					EURUS
				</p>
			</div>
		     </div>
             <div
			className="flex items-center border border-zinc-500 flex-col rounded-lg bg-zinc-900 overflow-hidden">
			<Image
				src={falcon}
				alt="New"
				className="w-full h-auto object-cover object-top shadow-sm"
			/>
			<div>
				<p className="my-2 text-lg font-medium text-white justify-self-center">
					FALCON
				</p>
			</div>
		     </div>
		    </div>
            
			{/* <People people={team} order="asc" />
			<h2 className="mt-12 text-center font-accent text-primary text-3xl font-bold">Members</h2>
			<People people={alumni} order="desc" /> */}
		</Container>
	)
}
