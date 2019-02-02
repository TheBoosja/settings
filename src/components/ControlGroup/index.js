import React, { Component } from 'react';
import './controlgroup.scss';

class ControlGroup extends Component {
	render() {
		const { id, label, children } = this.props;

		if (children && children.length > 1) {
			console.error('Can only include one child!');
			return null;
		}

		return (
			<div className="controlGroup">
				<label className="controlGroup__label" htmlFor={id}>
					{label}
				</label>
				{children}
			</div>
		);
	}
}

export default ControlGroup;
