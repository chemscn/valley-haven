import React from 'react';
import { IButton } from '../models';

export const Button = ({ buttonType, buttonText, spacing }: IButton) => {
	const buttonSwitch = () => {
		let className = spacing ? `btn text-lg me-${spacing}`: 'btn text-lg';
		switch (buttonType) {
			case (buttonType = 'outline'):
				return (className +=
					' btn-outline border-success text-success hover:text-white hover:bg-success hover:border-success');
			case (buttonType = 'primary'):
				return (className += ' btn-success text-white');
			case (buttonType = 'accent'):
				return (className += ' bg-amber-700 hover:bg-amber-600 text-white');
			case (buttonType = 'danger'):
				return (className += ' btn-outline border-error text-error hover:text-white hover:bg-error hover:border-error')
			default:
				return className;
		}
	};

	return <button className={buttonSwitch()}>{buttonText}</button>;
};
