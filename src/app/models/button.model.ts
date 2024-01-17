export interface IButton {
	buttonType: ButtonType;
	buttonText: string;
}

type ButtonType = 'primary' | 'outline' | 'accent';
