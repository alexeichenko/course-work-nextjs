import { Popover, PopoverButton, PopoverPanel, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import Menu from "./Menu";

const MenuMobile = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleOpenClick = () => {
		setIsOpen(true);
	};

	const handleCloseClick = () => {
		setIsOpen(false);
	};

	return (

		<Popover
			as="div"
			className={`z-50`}
		>

			{isOpen ?
				(
					<PopoverButton
						className="flex items-center justify-center z-10 w-8 h-8 relative"
						onClick={handleCloseClick}
					>
						<Image
							alt="hamburger menu"
							width={32}
							height={32}
							src={"/images/icon-close.svg"}
						/>
					</PopoverButton>
				) :
				(
					<PopoverButton
						className="flex items-center justify-center z-10 w-8 h-8 relative"
						onClick={handleOpenClick}
					>
						<Image
							alt="hamburger menu"
							width={32}
							height={32}
							src={"/images/icon-hamburger.svg"}
						/>
					</PopoverButton>
				)}

			<Transition
				show={isOpen}
				enter="transition ease-out duration-175"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
				as={Fragment}
			>

				<PopoverPanel
					as="div"
					className={`absolute inset-0 -translate-y-20 overflow-y-scroll -z-5 w-full h-svh pb-10 border border-white flex bg-black`}
				>
					<div className="m-auto">
						<Menu />
					</div>

				</PopoverPanel>

			</Transition >



		</Popover>



	)

};

export default MenuMobile;