import { StaticImageData } from 'next/image';

export interface IContactElement {
	imageSrc: StaticImageData;
	title: string;
	subContent?: string;
	isPhone?: boolean;
	isEmail?: boolean;
}
