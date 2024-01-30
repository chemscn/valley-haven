import React from 'react';
import Image from 'next/image';

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className="footer flex flex-row justify-between items-center py-4 px-10 bg-base-200 border-b-0">
				<aside className="items-center grid-flow-col">
					<address className="min-w-30 text-lg">
						<b>Valley Haven Inc.</b>
						<br />
						5501 W. Business 83
						<br />
						Harlingen, TX 78552
						<br />
						<a
							className="btn-link"
							href="tel:+19568930422"
						>
							(956)893-0422
						</a>
					</address>
				</aside>
				<nav className="grid-flow-col gap-1">
					<a
						href="mailto:info@valleyhaveninc.org"
						className="btn bg-green-800 hover:bg-green-700 text-white rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							className="bi bi-envelope"
							viewBox="0 0 16 16"
						>
							<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
						</svg>
					</a>
					<a
						href="https://twitter.com/valleyhaveninc?lang=en"
						target="_blank"
						className="btn btn-neutral text-white rounded-full"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 1200 1227"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						href="https://www.facebook.com/valleyhaveninc/"
						target="_blank"
						className="btn btn-secondary text-white rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							className="fill-current"
						>
							<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
						</svg>
					</a>
				</nav>
			</footer>
			<div className="flex flex-row justify-between py-4 px-10 bg-base-200">
				<div>
					<p className="font-bold">Valley Haven Inc. is a 501(C)3 Not-For-Profit Organization</p>
					<p>Copyright © {currentYear} - DnA</p>
				</div>
				<div>
					<a href="mailto:info@valleyhaveninc.org">info@valleyhaveninc.org</a>
				</div>
			</div>
		</>
	);
};
