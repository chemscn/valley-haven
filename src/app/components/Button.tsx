import React from 'react';
import { IButton } from '../models';

export const Button = ({ buttonType, buttonText, spacing }: IButton) => {
	const buttonSwitch = () => {
		let className = 'btn text-lg';
		switch (buttonType) {
			case (buttonType = 'link'):
				return (className += ' btn-link text-green-800 hover:text-green-700');
			case (buttonType = 'outline'):
				return (className +=
					' btn-outline border-green-800 text-green-800 hover:text-white hover:bg-green-700 hover:border-green-700');
			case (buttonType = 'primary'):
				return (className +=
					' bg-green-800 hover:text-white hover:bg-green-700 hover:border-green-700 text-white');
			case (buttonType = 'accent'):
				return (className += ' bg-amber-700 hover:bg-amber-600 text-white');
			case (buttonType = 'danger'):
				return (className +=
					' ms-3 btn-outline border-error text-error hover:text-white hover:bg-error hover:border-error');
		}
	};

	return <button className={buttonSwitch()}>{buttonText}</button>;
};
