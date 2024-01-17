import React from 'react';

export const InfoCard = () => {
	return (
		<div className="card my-10 mx-10 bg-green-800 text-white lg:mx-80">
			<div className="card-body">
				<h2 className="text-4xl text-center pb-4">Our Philosophy</h2>
				<p className="text-xl pb-2">
					At Valley Haven, we believe that children are the very essence of the future. Who they are
					tomorrow is essentially the outcome of how they are raised and nurtured today.
				</p>
				<p className="text-xl pb-2">
					We go above and beyond to provide our youth with an empowering environment where they can
					fully embrace their identity and gain all the skills they need to be leaders tomorrow.
				</p>
				<p className="text-xl pb-2">
					We work endlessly to shape the way they live their lives and teach them the fundamentals
					of social responsibility, healthy living, and cultural acceptance.
				</p>
				<div className='flex justify-center pb-2'>
					<img
						width={300}
						src="/hands.png"
					/>
				</div>
				<p className="text-xl text-center pb-2">
					Valley Haven: Where children are safe, loved, heard and happy!
				</p>
			</div>
		</div>
	);
};
