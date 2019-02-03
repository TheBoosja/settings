import React, { Component } from 'react';
import styled from 'styled-components';
import ControlGroup from '../ControlGroup';

const Input = styled.input.attrs(() => ({
	type: 'text'
}))`
	background-color: ${props => props.theme.primary};
	border: 1px solid ${props => props.theme.secondary};
	flex: 1;
	font: inherit;
	padding: 1rem;
`;

class TextInput extends Component {
	render() {
		const { label, name, value, onChange, onBlur } = this.props;

		return (
			<ControlGroup id={name} label={label}>
				<Input
					// className="controlGroup__input"
					type="text"
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</ControlGroup>
		);
	}
}

export default TextInput;
