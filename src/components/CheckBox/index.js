import React, { Component } from 'react';
import styled from 'styled-components';
import ControlGroup from '../ControlGroup';

const ChckBox = styled.input.attrs(() => ({
	type: 'checkbox'
}))`
	display: none;
`;

const Label = styled.label`
	border: 1px solid ${({ theme }) => theme.secondary};
	height: ${({ theme }) => theme.standardSize};
	justify-self: left;
	width: ${({ theme }) => theme.standardSize};

	${ChckBox}:checked + & {
		background-color: ${({ theme }) => theme.primary};
		border: ${({ theme }) => theme.standardSpace} solid ${({ theme }) => theme.secondary}
	}
`;

class CheckBox extends Component {
	render() {
		const { name, label, value, checked, onChange, onBlur } = this.props;

		return (
			<ControlGroup id={name} label={label} halfSize>
				<ChckBox
					id={name}
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<Label htmlFor={name} />
			</ControlGroup>
		);
	}
}

export default CheckBox;
