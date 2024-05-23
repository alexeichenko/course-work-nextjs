import Image from "next/image";
import Link from "next/link";

const Socials = () => {

	const socialsList = [
		{
			name: 'Facebook',
			icon: '/images/icon-facebook.svg',
			link: 'https://www.facebook.com/',
		},
		{
			name: 'Twitter',
			icon: '/images/icon-twitter.svg',
			link: 'https://x.com/',
		},
		{
			name: 'Pinterest',
			icon: '/images/icon-pinterest.svg',
			link: 'https://www.pinterest.com/',
		},
		{
			name: 'Instagram',
			icon: '/images/icon-instagram.svg',
			link: 'https://www.instagram.com/',
		},
	]

	return (
		<ul
			className="flex items-center gap-5"
		>
			{socialsList.map(item => (
				<li key={item.name}>

					<Link href={item.link}>
						<Image 
							alt="item.name"
							src={item.icon}
							width={20}
							height={20}
						/>
					</Link>

				</li>
			))}
		</ul>
	)
};

export default Socials;