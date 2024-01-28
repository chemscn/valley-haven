import React from 'react';

export const AboutHero = () => {
	return (
		<div
			className="hero p-20"
			style={{
				backgroundImage: 'url(/children.png)'
			}}
		>
			<div className="hero-overlay bg-opacity-70"></div>
			<div className="hero-content text-center text-neutral-content p-20">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold py-10 text-center">About Us</h1>
					<h2 className="mb-5 text-2xl">Paving The Way To a Brighter Future</h2>
				</div>
			</div>
		</div>
	);
};
