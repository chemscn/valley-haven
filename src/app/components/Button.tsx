import { IButton } from '../models';

export const Button = ({ buttonType, buttonText, className, mode = 'button' }: IButton) => {
	const buttonSwitch = () => {
		let newClass = `btn text-lg ${className ? className : ''}`;
		switch (buttonType) {
			case (buttonType = 'link'):
				return (newClass += ' btn-link text-white');
			case (buttonType = 'outline'):
				return (newClass +=
					' btn-outline hover:text-white hover:bg-green-700 hover:border-green-700');
			case (buttonType = 'primary'):
				return (newClass +=
					' bg-green-800 hover:text-white hover:bg-green-700 hover:border-green-700 text-white');
			case (buttonType = 'accent'):
				return (newClass += ' bg-amber-700 border-amber-700 hover:bg-amber-600 hover:border-amber-600 text-white');
			case (buttonType = 'danger'):
				return (newClass +=
					' ms-3 btn-outline border-error text-error hover:text-white hover:bg-error hover:border-error');
		}
	};

	return <button type={mode} className={buttonSwitch()}>{buttonText}</button>;
};
