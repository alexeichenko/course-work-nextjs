import Link from "next/link";
import Image from "next/image";
import deepEarthMobile from '@/public/images/mobile/image-deep-earth.jpg';
import nightArcadeMobile from '@/public/images/mobile/image-night-arcade.jpg';
import soccerTeamMobile from '@/public/images/mobile/image-soccer-team.jpg';
import theGridMobile from '@/public/images/mobile/image-grid.jpg';
import fromAboveMobile from '@/public/images/mobile/image-from-above.jpg';
import pocketBorealisMobile from '@/public/images/mobile/image-pocket-borealis.jpg';
import theCuriosityMobile from '@/public/images/mobile/image-curiosity.jpg';
import fisheyeMobile from '@/public/images/mobile/image-fisheye.jpg';
import imageInteractive from '@/public/images/desktop/image-interactive.jpg';
import { useCallback, useState } from "react";

export default function Products() {
  const productsList = [
    {
      id: '1',
      description: 'deep earth',
      mobile: deepEarthMobile,
    },
    {
      id: '2',
      description: 'night arcade',
      mobile: nightArcadeMobile,
    },
    {
      id: '3',
      description: 'soccer team',
      mobile: soccerTeamMobile,
    },
    {
      id: '4',
      description: 'the grid',
      mobile: theGridMobile,
    },
    {
      id: '5',
      description: 'from above',
      mobile: fromAboveMobile,
    },
    {
      id: '6',
      description: 'pocket borealis',
      mobile: pocketBorealisMobile,
    },
    {
      id: '7',
      description: 'the curiosity',
      mobile: theCuriosityMobile,
    },
    {
      id: '8',
      description: 'fisheye',
      mobile: fisheyeMobile,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <main className="bg-black">
      <section className="relative text-white lg:pb-0 z-5 bg-black h-full">
        <Image
          alt="section"
          src={imageInteractive}
          placeholder='blur'
          loading='lazy'
          fill
          className='blur-3xl opacity-75'
        />
        <div className="py-60 max-w-6xl mx-auto px-10 z-10 relative">
          <div className='flex flex-col gap-14 items-center text-center'>
            <h1 className="inline-flex uppercase text-white leading-tight font-light tracking-wider text-4xl ss:text-5xl sm:text-6xl md:text-7xl">Our products</h1>
            <div className="w-full flex flex-col gap-12">
              {productsList.map((product, index) => (
                <figure key={product.id} className={`flex flex-col items-center gap-4 pb-6 transition border-b ${hoveredIndex === index ? 'border-violet-400' : 'border-gray-300'}`}>
                  <div className="w-full h-96 relative overflow-hidden bg-white transition">
                    <Image
                      alt={product.description}
                      src={product.mobile}
                      loading="lazy"
                      placeholder="blur"
                      fill
                      className={`object-cover rounded-sm shadow-lg transition ${hoveredIndex === index ? 'opacity-75 scale-110' : 'opacity-100'}`}
                    />
                  </div>
                  <figcaption>
                    <Link
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className={`uppercase leading-tight font-light tracking-wider text-4xl transition ${hoveredIndex === index ? 'text-violet-500' : 'text-white'}`}
                      href={`/products/${product.id}`}>
                      {product.description}
                    </Link>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
