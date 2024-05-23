import Image from "next/image";
import imageHero from '../../public/images/image-hero.jpg';

const SectionHero = () => {

	return (

		<section className="relative h-svh z-5 bg-black">

			<Image
				alt="hero section"
				loading="lazy"
				placeholder="blur"
				fill
				src={imageHero}
				className={`z-1 object-center opacity-60`}
			/>

			<div className="pt-60 max-w-6xl mx-auto px-10 z-10 relative">
				<div className="p-3 ss:p-8 max-w-2xl border-2 border-white flex flex-wrap text-wrap break-words">
					<h1 className="inline-flex uppercase text-white leading-tight font-light tracking-wider max-w-lg text-4xl ss:text-5xl sm:text-6xl md:text-7xl">Immersive experiences that deliver</h1>
				</div>
			</div>

		</section>
	)

};

export default SectionHero;