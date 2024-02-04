export interface IButton {
	buttonType: ButtonType;
	buttonText: string;
	className?: string;
	mode?: 'submit' | 'reset' | 'button';
}

type ButtonType = 'primary' | 'outline' | 'accent' | 'danger' | 'link';
