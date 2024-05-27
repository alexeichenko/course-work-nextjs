import SectionCreations from "@/components/Sections/SectionCreations";
import SectionHero from "@/components/Sections/SectionHero";
import SectionInteractive from "@/components/Sections/SectionInteractive";
import blur from "@/lib/localBlurPlaceholder";

export default function Home({ heroContent, interactiveContent }) {
  return (
    <main>
      <SectionHero content={heroContent}/>
      <SectionInteractive content={interactiveContent} />
      <SectionCreations />
    </main>
  );
};

export async function getServerSideProps() {
	const heroContent = {
		title: 'Immersive experiences that deliver',
		images: {
			desktop: '/images/desktop/image-hero.jpg',
			mobile: '/images/desktop/image-hero.jpg'
		}
	};

  const interactiveContent = {
    title: 'The leader in interactive vr',
    text: 'Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses digital experiences that bind to their brand.',
    images: {
      desktop: '/images/desktop/image-interactive.jpg'
    }
  };

  const [heroBlurDataURL, interactiveBlurDataURL] = await blur([heroContent.images.desktop, interactiveContent.images.desktop]);

  heroContent.blurDataURL = heroBlurDataURL;
  interactiveContent.blurDataURL = interactiveBlurDataURL;

	return {
		props: {
      heroContent,
      interactiveContent,
    }
	};
};