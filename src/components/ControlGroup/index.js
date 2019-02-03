import React, { Component } from 'react';
import styled from 'styled-components';

const CtrlGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: 1rem;
`;

const Label = styled.label`
	/* flex: ${props => props.halfSize ? .5 : 1}; */
	padding: 1rem 2rem;
`;

class ControlGroup extends Component {
	render() {
		const { id, halfSize, label, children } = this.props;

		return (
			<CtrlGroup>
				<Label htmlFor={id} halfSize={halfSize}>{label}</Label>
				{children}
			</CtrlGroup>
		);
	}
}

export default ControlGroup;
