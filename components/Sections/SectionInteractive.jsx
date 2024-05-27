import Image from "next/image";
import imageInteractive from '@/public/images/desktop/image-interactive.jpg';
import { useCallback, useState } from "react";

const SectionInteractive = ({ content }) => {

	const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);
	const [isImageHovered, setIsImageHovered] = useState(false);

	const handleDescriptionMouseEnter = useCallback(() => {
		setIsDescriptionHovered(true);
	}, []);

	const handleDescriptionMouseLeave = useCallback(() => {
		setIsDescriptionHovered(false);
	}, []);

	const handleImageMouseEnter = useCallback(() => {
		setIsImageHovered(true);
	}, []);

	const handleImageMouseLeave = useCallback(() => {
		setIsImageHovered(false);
	}, []);

	return (
		<section className={`relative pt-48 lg:h-svh transition-colors duration-500 ${isImageHovered ? 'bg-black' : 'bg-white'}`}>
			<Image
				alt="background"
				placeholder="blur"
				loading="lazy"
				src={imageInteractive}
				fill
				className={`blur-3xl transition-opacity duration-500 ${isImageHovered ? 'opacity-50' : 'opacity-0'}`}
			/>

			<div className="w-full max-w-6xl mx-auto px-10">
				<div className='lg:relative flex flex-col gap-10 items-center lg:items-start'>
					<Image
						onMouseEnter={handleImageMouseEnter}
						onMouseLeave={handleImageMouseLeave}
						alt="interactive section"
						loading="lazy"
						src={content.images.desktop}
						width={731}
						height={500}
						className={`w-full h-[500px] lg:w-auto transition-all duration-500 ${isDescriptionHovered ? 'opacity-70 blur-sm' : 'opacity-100'} ${isImageHovered ? 'lg:w-full object-cover object-top shadow-lg' : ''}`}
					/>

					<div
						className={`p-14 lg:absolute lg:bottom-0 lg:right-0 flex flex-col items-center gap-8 max-w-xl bg-white group hover:bg-violet-900 hover:bg-opacity-80 transition-all duration-500 cursor-default ease-in-out ${isImageHovered ? 'translate-x-[200%]' : 'translate-x-0'}`}
						onMouseEnter={handleDescriptionMouseEnter}
						onMouseLeave={handleDescriptionMouseLeave}
					>
						<h2 className="inline-flex uppercase text-black leading-tight font-light tracking-wider max-w-lg text-3xl ss:text-4xl sm:text-5xl md:text-6xl text-center lg:text-left group-hover:text-white transition-colors duration-500">
							{content.title}
						</h2>

						<p className="text-gray-400 text-base font-semibold group-hover:text-violet-200 transition-colors duration-500">
							{content.text}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionInteractive;
