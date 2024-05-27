import imageHero from '@/public/images/desktop/image-hero.jpg';
import Image from 'next/image';

export default function About() {
	return (
		<main className="bg-black">
			<section className="relative text-white lg:pb-0 z-5 bg-black h-full lg:h-svh">

				<Image
					alt="section"
					src={imageHero}
					placeholder='blur'
					loading='lazy'
					fill
					className='blur-2xl'
				/>

				<div className="py-60 max-w-6xl mx-auto px-10 z-10 relative">
					<div className='flex flex-col gap-14 items-center text-center'>
						<h1 className="inline-flex uppercase text-white leading-tight font-light tracking-wider max-w-lg text-4xl ss:text-5xl sm:text-6xl md:text-7xl">About Us</h1>
						<div className='flex flex-col gap-4 text-left max-w-2xl leading-tight font-light tracking-wider text-lg lg:text-xl text-gray-100'>
							<p>Sit amet consectetur adipiscing elit pellentesque habitant. Id leo in vitae turpis massa sed. Arcu dui vivamus arcu felis bibendum. Posuere sollicitudin aliquam ultrices sagittis orci a.</p>
							<p>Vivamus arcu felis bibendum ut. Lectus nulla at volutpat diam. Phasellus faucibus scelerisque eleifend donec pretium. Sed pulvinar proin gravida hendrerit lectus. Purus non enim praesent elementum. Egestas sed tempus urna et pharetra. Malesuada pellentesque elit eget gravida cum sociis. Mattis rhoncus urna neque viverra justo nec ultrices.</p>
							<p>Urna cursus eget nunc scelerisque viverra mauris in aliquam. Amet justo donec enim diam vulputate ut pharetra. Semper viverra nam libero justo laoreet sit. Volutpat commodo sed egestas egestas fringilla phasellus. Justo donec enim diam vulputate ut pharetra sit amet. Commodo ullamcorper a lacus vestibulum sed arcu non.</p>
						</div>
					</div>
				</div>

			</section>
		</main>
	)
};