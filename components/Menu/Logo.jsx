import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg"

const Logo = () => {

	return (
		<Link
			href="/"
		>
			<Image
				alt="logo"
				src={logo}
			>
			</Image>
		</Link>
	)
};

export default Logo;