import React, { Component } from 'react';
import ControlGroup from '../ControlGroup';

class TextInput extends Component {
	render() {
		const { label, name, value, onChange, onBlur } = this.props;

		return (
			<ControlGroup id={name} label={label}>
				<input
					className="controlGroup__input"
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
