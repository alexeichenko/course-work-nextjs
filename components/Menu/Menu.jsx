import Link from "next/link";

const Menu = () => {

	const navList = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/about',
		},
		{
			name: 'Careers',
			href: '/careers',
		},
		{
			name: 'Events',
			href: '/events',
		},
		{
			name: 'Products',
			href: '/products',
		},
		{
			name: 'Support',
			href: '/support',
		},
	]

	return (
		<ul
			className="flex gap-7 flex-col md:flex-row"
		>
			{navList.map(item => (
				<li
					key={item.name}
					className="font-semibold text-white"
				>
					<Link
						href={item.href}
					>{item.name}</Link>
				</li>
			))}
		</ul>
	)
};

export default Menu;