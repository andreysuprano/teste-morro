import { useState } from 'react';
import * as S from './styles';

interface InputProps {
	type: string;
	placeholder: string;
	value(value: any): any;
}

export const Input = ({ type, placeholder, value }: InputProps) => {
	const [ value, setValue ] = useState('');
	const changeValueCallback = (inputValue: any) => {
		value(inputValue);
	};

	return (
		<S.Input
			type={type}
			placeholder={placeholder}
			onChange={(e) => {
				changeValueCallback(e.target.value);
			}}
			value={}
		/>
	);
};
