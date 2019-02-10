import React, { Component } from 'react';
import styled from 'styled-components';
import ControlGroup from '../ControlGroup';

const RadioGrp = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: min-content;
`;

class RadioGroup extends Component {
	render() {
		const { label, children } = this.props;

		return (
			<ControlGroup label={label}>
				<RadioGrp>
					{children}
				</RadioGrp>
			</ControlGroup>
		);
	}
}

export default RadioGroup;
