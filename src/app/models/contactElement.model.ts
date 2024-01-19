import { ReactNode } from 'react';

export interface IContactElement {
	imageSrc: string;
	title: string;
	subContent?: string;
	isPhone?: boolean;
	isEmail?: boolean;
}
