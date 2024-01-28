import Image from 'next/image';
import { ICardInfo } from '../models';

export const InfoCard = ({
	cardInfo: { title, paragraphs, imageSrc, imageAlt, imageWidth, imageHeight }
}: ICardInfo) => {
	return (
		<div className="card my-10 mx-10 bg-green-800 text-white md:mx-40">
			<div className="card-body">
				<h2 className="text-4xl text-center pb-4">{title}</h2>
				{paragraphs.map((p, i) => {
					return (
						<p
							key={i}
							className="text-xl pb-2"
						>
							{p}
						</p>
					);
				})}
				{imageSrc && (
					<div className="flex justify-center pb-2">
						<Image
							src={imageSrc}
							width={imageWidth}
							height={imageHeight}
							alt={imageAlt!}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
