import { StaticImageData } from 'next/image';

export interface ICard {
	title: string;
	content: string;
	linkSrc: string;
	imageSrc: StaticImageData;
}

export interface ICardInfoProps {
	title: string;
	paragraphs: string[];
	hasImage?: boolean;
	imageSrc?: StaticImageData;
	imageAlt?: string;
	imageHeight?: number;
	imageWidth?: number;
	isWishList?: boolean;
	isVolunteer?: boolean;
}

export interface ICardInfo {
	cardInfo: ICardInfoProps;
}
