'use client';
import Link from 'next/link';
import { Button } from '.';
import { useEffect, useState } from 'react';
export const Navbar = () => {
	const [themeText, setThemeText] = useState<string>('');
	const currentTheme = () => {
		const html = document.querySelector('html');
		const theme = html?.getAttribute('data-theme');
		if (html) {
			console.log(theme);
			if (theme === 'fantasy') {
				setThemeText('Light');
				html.setAttribute('data-theme', 'night');
			}

			if (theme === 'night') {
				setThemeText('Dark');
				html.setAttribute('data-theme', 'fantasy');
			}
		}
	};
	useEffect(() => {
		currentTheme();
	}, []);
	return (
		<div className="navbar bg-base-100 sticky top-0 z-10 border-b-2 border-gray-200 sm:px-10">
			<div className="navbar-start">
				<Link href="/">
					<img
						className="sm:mx-5 mx-2 py-2 w-24 scale-105 lg:scale-125"
						src="/logo.svg"
						alt="logo"
					/>
				</Link>
			</div>
			<div className="navbar-center hidden md:flex">
				<ul className="sm:text-sm menu menu-horizontal lg:px-1 md:text-lg">
					<li>
						<Link
							title="Home"
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							title="Home"
							href="/about"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							title="Home"
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end flex-row items-center">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost flex md:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-auto dark:border-2"
					>
						<li>
							<Link
								title="Home"
								href="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								title="Home"
								href="/about"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								title="Home"
								href="/contact"
							>
								Contact
							</Link>
						</li>
							<Link
								target="blank"
								href="https://www.paypal.com/donate/?hosted_button_id=X9H2JT2XF5PEG"
							>
								<Button
									className='text-sm'
									buttonType="accent"
									buttonText="Donate"
								/>
							</Link>
					</ul>
				</div>
			</div>
			<Link
				className="hidden md:flex"
				target="blank"
				href="https://www.paypal.com/donate/?hosted_button_id=X9H2JT2XF5PEG"
			>
				<Button
					buttonType="accent"
					buttonText="Donate"
				/>
			</Link>
			<label className="swap swap-rotate ml-5">
				{/* this hidden checkbox controls the state */}
				<input
					type="checkbox"
					className="theme-controller"
					value="night"
					onClick={currentTheme}
				/>

				{/* sun icon */}
				<svg
					className="swap-on fill-current w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
				</svg>
				{/* moon icon */}
				<svg
					className="swap-off fill-current w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
				</svg>
			</label>
		</div>
	);
};
