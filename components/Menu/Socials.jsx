import Image from "next/image";
import Link from "next/link";
import facebookIcon from '@/public/images/icon-facebook.svg';
import instagramIcon from '@/public/images/icon-instagram.svg';
import pinterestIcon from '@/public/images/icon-pinterest.svg';
import twitterIcon from '@/public/images/icon-twitter.svg';

const Socials = () => {

	const socialsList = [
		{
			name: 'Facebook',
			icon: facebookIcon,
			link: 'https://www.facebook.com/',
		},
		{
			name: 'Instagram',
			icon: instagramIcon,
			link: 'https://www.instagram.com/',
		},
		{
			name: 'Pinterest',
			icon: pinterestIcon,
			link: 'https://www.pinterest.com/',
		},
		{
			name: 'Twitter',
			icon: twitterIcon,
			link: 'https://x.com/',
		},
	];

  return (
    <ul className="flex items-center gap-5">
      {socialsList.map((item) => (
        <li key={item.name}>
          <Link
            className="relative after:block after:absolute after:inset-0 after:m-auto after:top-11 after:left-0 after:w-0 after:h-0.5 after:rounded-lg after:bg-white after:transition-all hover:after:w-6"
            href={item.link}
          >
            <Image
              alt={item.name}
              src={item.icon}
              width={20}
              height={20}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;