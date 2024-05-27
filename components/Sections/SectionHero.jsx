import Image from "next/image";
import { useCallback, useState } from "react";

const SectionHero = ({ content }) => {

	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = useCallback(() => {
			setIsHovered(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
			setIsHovered(false);
	}, [])

	return (
		<section className="relative h-full pb-20 lg:pb-0 lg:h-svh z-5 bg-black">

			<Image
				alt="hero section"
				loading="lazy"
				fill
				src={content.images.desktop}
				srcSet={`${content.images.mobile} 767w, ${content.images.desktop} 768w`}
				sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw"
				placeholder="blur"
				blurDataURL={content.blurDataURL}
				className={`z-1 object-center transition-opacity duration-300 ${isHovered ? 'opacity-30' : 'opacity-60'}`}
			/>

			<div className="pt-60 max-w-6xl mx-auto px-10 z-10 relative">

				<div className="w-fit group"
					onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
				>
					<div className="p-3 ss:p-8 max-w-2xl border-2 border-white flex flex-wrap text-wrap break-words group-hover:border-violet-600 group-hover:bg-violet-500 group-hover:bg-opacity-20 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-200 cursor-default">
						<h1 className="inline-flex uppercase text-white leading-tight font-light tracking-wider max-w-lg text-4xl ss:text-5xl sm:text-6xl md:text-7xl group-hover:text-violet-200 transition-colors duration-150">
							{content.title}
						</h1>
					</div>
				</div>

			</div>

		</section>
	);
};

export default SectionHero;
