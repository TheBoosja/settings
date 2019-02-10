import React, { Component } from 'react';
import styled from 'styled-components';

const Option = styled.option`
	font: inherit;
`;

class OptionItem extends Component {
	render() {
		const { value, children } = this.props;

		return (
			<Option value={value}>{children}</Option>
		);
	}
}

export default OptionItem;
