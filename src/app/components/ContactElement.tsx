import React from 'react';
import { IContactElement } from '../models';
import Image from 'next/image';

export const ContactElement = ({ imageSrc, title, subContent, isEmail, isPhone }: IContactElement) => {
	return (
		<div className="flex flex-col items-center mb-10">
			<div className="flex p-6 w-20 justify-center bg-green-800 rounded-full mb-2">
				<Image
					src={imageSrc}
					height={30}
					width={30}
					alt={`${title}-image`}
				/>
			</div>
			<p className="font-bold">{title}:</p>
			{isPhone && (
				<a
					className="btn-link"
					href={`tel:${subContent}`}
				>
					{subContent}
				</a>
			)}
			{isEmail && (
				<a
					className="btn-link"
					href={`mailto:${subContent}`}
				>
					{subContent}
				</a>
			)}
			{!subContent && (
				<p>
					5501 W. Business 83 <br />
					Harlingen, TX 78552
				</p>
			)}
		</div>
	);
};
