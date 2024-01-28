export interface IButton {
	buttonType: ButtonType;
	buttonText: string;
	spacing?: string;
}

type ButtonType = 'primary' | 'outline' | 'accent' | 'danger' | 'link';
