import React, { Component } from 'react';
import styled from 'styled-components';
import ControlGroup from '../ControlGroup';

const Select = styled.select`
	background-color: ${props => props.theme.primary};
	border: 1px solid ${props => props.theme.secondary};
	flex: 1;
	font: inherit;
	padding: ${({ theme }) => theme.standardSpace};
`;

class SelectBox extends Component {
	render() {
		const { label, name, value, onChange, children } = this.props;

		return (
			<ControlGroup label={label}>
				<Select
					name={name}
					value={value}
					onChange={onChange}
				>
					{children}
				</Select>
			</ControlGroup>
		);
	}
}

export default SelectBox;
