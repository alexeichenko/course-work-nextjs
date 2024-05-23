import Image from "next/image";
import imageInteractive from '../../public/images/image-interactive.jpg';

const SectionInteractive = () => {

	return (

		<section className="lg:h-svh bg-white">

			<div className="w-full max-w-6xl mx-auto px-10">

				<div className="mt-24 lg:mt-48 lg:relative flex flex-col gap-10 items-center lg:items-start">

					<Image
						alt="interactive section"
						loading="lazy"
						placeholder="blur"
						width={700}
						height={600}
						src={imageInteractive}
						className="w-full h-full lg:w-auto"
					/>

					<div className="pt-6 pb-16 lg:absolute lg:bottom-0 lg:right-0 lg:pl-20 lg:pt-20 flex flex-col items-center gap-8 max-w-xl bg-white">

						<h2
							className="inline-flex uppercase text-black leading-tight font-light tracking-wider max-w-lg text-3xl ss:text-4xl sm:text-5xl md:text-6xl text-center lg:text-left">
							The leader in interactive vr
						</h2>

						<p className="text-gray-400 text-base font-semibold">
							Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses digital experiences that bind to their brand.
						</p>

					</div>

				</div>

			</div>

		</section>

	)
};

export default SectionInteractive;