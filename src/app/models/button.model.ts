export interface IButton {
	buttonType: ButtonType;
	buttonText: string;
	className?: string;
}

type ButtonType = 'primary' | 'outline' | 'accent' | 'danger' | 'link';
