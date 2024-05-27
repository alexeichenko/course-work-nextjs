import Link from "next/link";
import Image from "next/image";
import deepEarth from '@/public/images/desktop/image-deep-earth.jpg';
import nightArcade from '@/public/images/desktop/image-night-arcade.jpg';
import soccerTeam from '@/public/images/desktop/image-soccer-team.jpg';
import theGrid from '@/public/images/desktop/image-grid.jpg';
import fromAbove from '@/public/images/desktop/image-from-above.jpg';
import pocketBorealis from '@/public/images/desktop/image-pocket-borealis.jpg';
import theCuriosity from '@/public/images/desktop/image-curiosity.jpg';
import fisheye from '@/public/images/desktop/image-fisheye.jpg';
import deepEarthMobile from '@/public/images/mobile/image-deep-earth.jpg';
import nightArcadeMobile from '@/public/images/mobile/image-night-arcade.jpg';
import soccerTeamMobile from '@/public/images/mobile/image-soccer-team.jpg';
import theGridMobile from '@/public/images/mobile/image-grid.jpg';
import fromAboveMobile from '@/public/images/mobile/image-from-above.jpg';
import pocketBorealisMobile from '@/public/images/mobile/image-pocket-borealis.jpg';
import theCuriosityMobile from '@/public/images/mobile/image-curiosity.jpg';
import fisheyeMobile from '@/public/images/mobile/image-fisheye.jpg';

const SectionCreations = () => {
  const imagesList = [
    {
      description: 'deep earth',
      desktop: deepEarth,
      mobile: deepEarthMobile,
      width: 'w-40',
      position: 'object-bottom'
    },
    {
      description: 'night arcade',
      desktop: nightArcade,
      mobile: nightArcadeMobile,
      width: 'w-40',
      position: 'object-center'
    },
    {
      description: 'soccer team vr',
      desktop: soccerTeam,
      mobile: soccerTeamMobile,
      width: 'w-40',
      position: 'object-top'
    },
    {
      description: 'the grid',
      desktop: theGrid,
      mobile: theGridMobile,
      width: 'w-40',
      position: 'object-center'
    },
    {
      description: 'from up above vr',
      desktop: fromAbove,
      mobile: fromAboveMobile,
      width: 'w-44',
      position: 'object-center'
    },
    {
      description: 'pocket borealis',
      desktop: pocketBorealis,
      mobile: pocketBorealisMobile,
      width: 'w-44',
      position: 'object-center'
    },
    {
      description: 'the curiosity',
      desktop: theCuriosity,
      mobile: theCuriosityMobile,
      width: 'w-48',
      position: 'object-top'
    },
    {
      description: 'make it fisheye',
      desktop: fisheye,
      mobile: fisheyeMobile,
      width: 'w-40',
      position: 'object-top'
    },
  ];

  return (
    <section className="bg-white pt-20">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col items-center text-center gap-16 md:items-start md:text-left md:flex-row md:flex-wrap md:gap-y-20 mb-48">
        <h2 className="order-1 flex-1 uppercase leading-tight font-light tracking-wider text-5xl text-black">
          Our creations
        </h2>
        <Link
          href={'/products'}
          className="order-3 w-1/2 text-center md:order-2 md:self-center md:w-fit md:h-fit px-7 py-2 leading-none tracking-widest uppercase text-lg border-2 border-gray-800 border-opacity-60 hover:text-white hover:bg-gray-900 hover:border-black transition-colors"
        >
          See all
        </Link>
        <div className="w-full order-2 md:order-3 basis-full flex flex-wrap gap-y-8 lg:gap-y-0">
            {imagesList.map((picture) => (
              <div key={picture.description} className="w-full lg:w-1/4 flex-shrink-0 p-2">
                <figure className="relative h-64 w-full overflow-hidden md:h-[450px] group hover:cursor-pointer">
                  <Image
                    alt={picture.description}
                    loading="lazy"
                    placeholder="blur"
                    src={picture.desktop}
                    srcSet={`${picture.mobile} 1023w, ${picture.desktop} 1024w`}
                    sizes="(max-width: 1023px) 100vw, (min-width: 1024px) 100vw"
                    fill
                    className={`object-cover ${picture.position} group-hover:opacity-35 group-hover:scale-110 transition`}
                  />
                  <figcaption className={`absolute bottom-10 left-10 z-10 ${picture.width} text-left text-wrap break-words text-white uppercase leading-none font-light tracking-wider text-4xl cursor-default group-hover:text-violet-900 transition`}>
                    {picture.description}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default SectionCreations;