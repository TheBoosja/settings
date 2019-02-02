import React, { Component } from 'react';
import ControlGroup from '../ControlGroup';

class CheckBox extends Component {
	render() {
		const { name, label, value, checked, onChange, onBlur } = this.props;

		return (
			<ControlGroup id={name} label={label}>
				<input
					type="checkbox"
					id={name}
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</ControlGroup>
		);
	}
}

export default CheckBox;
