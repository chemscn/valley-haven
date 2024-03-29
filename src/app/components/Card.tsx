import Image from 'next/image';
import Link from 'next/link';
import { Button } from '.';
import { ICard } from '../models';

export const Card = ({ title, content, linkSrc, imageSrc }: ICard) => {
	return (
		<div className="card w-96 glass transition ease-in-out hover:shadow-lg hover:shadow-base-200 hover:-translate-y-5">
			<figure>
				<Image
					style={{ height: 350 }}
					src={imageSrc}
					width={400}
					height={300}
					alt={`card-${title}`}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-2xl tracking-wider">{title}</h2>
				<p>{content}</p>
				<div className="card-actions justify-left py-2">
					<Link href={linkSrc}>
						<Button
							buttonText="Learn More"
							buttonType="outline"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
