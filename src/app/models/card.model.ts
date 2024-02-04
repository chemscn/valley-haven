export interface ICard {
	title: string;
	content: string;
	linkSrc: string;
	imageSrc: string;
}

export interface ICardInfoProps {
	title: string;
	paragraphs: string[];
	hasImage?: boolean;
	imageSrc?: string;
	imageAlt?: string;
	imageHeight?: number;
	imageWidth?: number;
	isWishList?: boolean;
	isVolunteer?: boolean;
}

export interface ICardInfo {
	cardInfo: ICardInfoProps;
}
