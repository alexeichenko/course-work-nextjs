import Logo from "../Menu/Logo";
import Menu from "../Menu/Menu";
import MenuMobile from "../Menu/MenuMobile";


const Header = () => {
	return (
		<header className="absolute inset-x-0 top-20 z-50">

				<nav
					className="hidden md:flex items-center justify-between gap-2 max-w-6xl mx-auto px-10"
				>
					<Logo />
					<Menu />
				</nav>

				<nav
					className="flex items-center justify-between gap-2 max-w-6xl mx-auto px-10 md:hidden"
				>
					<Logo />
					<MenuMobile />
				</nav>

		</header>
	)
};

export default Header;

// max-w-6xl mx-auto px-10