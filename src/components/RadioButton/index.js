import React, { Component } from 'react';
import styled from 'styled-components';

const RadioContainer = styled.span`
	margin-right: 1.8rem;
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

	&:before {
		content: '';
		border: 1px solid ${props => props.theme.secondary};
		border-radius: 2rem;
		height: 4rem;
		width: 4rem;
		display: inline-block;

		${RadioBtn}:checked + & {
			background-color: ${props => props.theme.primary};
			border: 1rem solid ${props => props.theme.secondary}
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
