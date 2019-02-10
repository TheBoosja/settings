import React, { Component } from 'react';
import styled from 'styled-components';

const RadioContainer = styled.span`
	margin-right: ${({ theme }) => theme.largeSpace};
`;

const RadioBtn = styled.input.attrs(() => ({
	type: 'radio'
}))`
	display: none;
`;

const Label = styled.label`
	display: grid;
	grid-auto-flow: column;
	justify-items: start;
	align-items: center;
	grid-gap: ${({ theme }) => theme.standardSpace};

	&:before {
		content: '';
		border: 1px solid ${props => props.theme.secondary};
		border-radius: ${({ theme }) => theme.largeSpace};
		height: ${({ theme }) => theme.standardSize};
		width: ${({ theme }) => theme.standardSize};
		display: inline-block;

		${RadioBtn}:checked + & {
			background-color: ${props => props.theme.primary};
			border: ${({ theme }) => theme.standardSpace} solid ${props => props.theme.secondary}
		}
	}
`;

class RadioButton extends Component {
	render() {
		const { name, value, checked, onChange, onBlur, label } = this.props;

		return (
			<RadioContainer>
				<RadioBtn
					id={name}
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<Label htmlFor={name}>
					<span>{label}</span>
				</Label>
			</RadioContainer>
		)
	}
}

export default RadioButton;
