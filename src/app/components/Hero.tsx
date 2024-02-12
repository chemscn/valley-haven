import Image from 'next/image';
import Link from 'next/link';
import { Button } from '.';

import heroImage from '/public/hero-main-page.png';

export const Hero = () => {
	return (
		<div className="hero pb-10">
			<div className="hero-content flex flex-col lg:flex-row">
				<div>
					<h1 className="lg:text-5xl text-4xl font-bold tracking-wider">
						Safe Haven for Children in Crisis
					</h1>
					<h2 className="lg:text-4xl text-3xl py-5 tracking-tighter">
						Providing compassionate care and support during times of emergency.
					</h2>
					<Link
						target="_blank"
						href="https://form.jotform.com/kristenmillon/valley-haven-volunteer-application"
					>
						<Button
							buttonType="primary"
							buttonText="Get Involved"
						/>
					</Link>
				</div>
				<Image
					className="border-1 rounded-lg"
					src={heroImage.src}
					alt="photo of kids"
					width={400}
					height={200}
				/>
			</div>
		</div>
	);
};
