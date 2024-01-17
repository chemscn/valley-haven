import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '.';

export const Hero = () => {
	return (
		<div className="hero pb-10">
			<div className="hero-content lg:flex-row-reverse">
				<Image className='border-1 rounded-lg' src="/hero-main-page.png" alt='photo of kids' width={400} height={200}/>
				<div>
					<h1 className="text-5xl font-bold">Safe Haven for Children in Crisis</h1>
                    <h2 className='text-4xl py-5'>Providing compassionate care and support during times of emergency.</h2>
					<Link href='/involvement'>
						<Button buttonType='primary' buttonText='Get Involved' />
					</Link>
				</div>
			</div>
		</div>
	);
};
