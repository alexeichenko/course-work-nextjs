import { Popover, PopoverButton, PopoverPanel, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useState } from "react";
import Menu from "./Menu";
import openMenu from '@/public/images/icon-hamburger.svg';
import closeMenu from '@/public/images/icon-close.svg';

const MenuMobile = () => {

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [isOpen]);

	const handleOpenClick = useCallback(() => {
		setIsOpen(true);
	},[]);

	const handleCloseClick = useCallback(() => {
		setIsOpen(false);
	}, []);

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
							src={closeMenu}
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
							src={openMenu}
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
					className={`absolute inset-0 -top-20 overflow-y-scroll -z-5 w-full h-svh py-10 flex bg-violet-950`}
				>
					<div className="m-auto">
						<Menu />
					</div>

				</PopoverPanel>

			</Transition >

			<style jsx global>{`
				body.no-scroll {
					overflow: hidden;
				}
			`}</style>

		</Popover>



	)

};

export default MenuMobile;