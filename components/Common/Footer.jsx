
import Copyright from "../Menu/Copyright";
import Logo from "../Menu/Logo";
import Menu from "../Menu/Menu";
import Socials from "../Menu/Socials";

const Footer = () => {

	return (

		<footer className="bg-black">

			<div className="w-full max-w-6xl mx-auto px-10 py-10 flex flex-col md:flex-row md:flex-wrap gap-6 items-center md:items-start bg-black">

				<div className="order-1 flex-grow flex-shrink-0 basis-1/2">
					<Logo />
				</div>

				<div className="order-3 md:order-2 self-center">
					<Socials />
				</div>

				<div className="order-2 md:order-3 flex-grow flex-shrink-0 basis-1/2">
					<Menu />
				</div>

				<div className="order-4">
					<Copyright />
				</div>

			</div>

		</footer>

	)
};

export default Footer;