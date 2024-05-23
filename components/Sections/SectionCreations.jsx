import Image from "next/image";
import deepEarth from '../../public/images/image-deep-earth.jpg';
import nightArcade from '../../public/images/image-night-arcade.jpg';
import soccerTeam from '../../public/images/image-soccer-team.jpg';
import theGrid from '../../public/images/image-grid.jpg';
import fromAbove from '../../public/images/image-from-above.jpg';
import pocketBorealis from '../../public/images/image-pocket-borealis.jpg';
import theCuriosity from '../../public/images/image-curiosity.jpg';
import fisheye from '../../public/images/image-fisheye.jpg';
import Link from "next/link";

const SectionCreations = () => {

	return (

		<section className="bg-white">

			<div className="w-full max-w-6xl mx-auto px-10 flex flex-col items-center text-center gap-16 md:items-start md:text-left md:flex-row md:flex-wrap md:gap-y-20 mb-48">

				<h2 className="order-1 flex-1 uppercase leading-tight font-light tracking-wider text-5xl text-black">Our creations</h2>

				<Link href={'/products'} className="order-3 w-1/2 text-center md:order-2 md:self-center md:w-fit md:h-fit px-7 py-2 leading-none tracking-widest uppercase text-lg border-2 border-gray-800 border-opacity-60">See all</Link>

				{/* Цей блок з flex потребує уваги */}
				<ul className="w-full order-2 md:order-3 basis-full flex flex-col gap-14 lg:flex-row lg:flex-wrap lg:gap-0">

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={deepEarth}
								placeholder="blur"
								fill
								className="object-cover opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								deep earth
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={nightArcade}
								placeholder="blur"
								fill
								className="object-cover opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								night arcade
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={soccerTeam}
								placeholder="blur"
								fill
								className="object-cover object-top opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								soccer team vr
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={theGrid}
								placeholder="blur"
								fill
								className="object-cover object-center opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[10rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								the grid
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={fromAbove}
								placeholder="blur"
								fill
								className="object-cover object-left opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								from up above vr
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={pocketBorealis}
								placeholder="blur"
								fill
								className="object-cover object-center opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								pocket borealis
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={theCuriosity}
								placeholder="blur"
								fill
								className="object-cover object-center opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								the curiosity
							</figcaption>

						</figure>
					</li>

					<li className="lg:basis-1/4 lg:p-3">
						<figure className="relative h-64 w-full overflow-hidden flex flex-col bg-black md:h-[450px]">

							<Image
								alt="deep earth"
								loading="lazy"
								src={fisheye}
								placeholder="blur"
								fill
								className="object-cover object-top opacity-80"
							/>

							<figcaption on className="absolute bottom-10 left-10 z-10 max-w-[12rem] text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl">
								make it fisheye
							</figcaption>

						</figure>
					</li>

				</ul>

			</div>

		</section>

	)
};

export default SectionCreations;