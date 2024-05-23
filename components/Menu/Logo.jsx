import Image from "next/image";
import Link from "next/link";

const Logo = () => {

	return (
		<Link
			href="/"
		>
			<Image
				width={180}
				height={120}
				alt="logo"
				src={"/images/logo.svg"}
			>
			</Image>
		</Link>
	)
};

export default Logo;