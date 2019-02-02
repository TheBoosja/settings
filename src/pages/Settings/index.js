import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			bool: false
		};

		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	componentDidMount() {
		const settings = this.getSettings();

		this.setState(settings);
	}

	getSettings() {
		return JSON.parse(localStorage.getItem('settings')) || {};
	}

	onChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	}

	onBlur(e) {
		const prevSettings = this.getSettings();

		const newSettings = JSON.stringify({
			...prevSettings,
			name: this.state.name
		});

		localStorage.setItem('settings', newSettings);
	}

	render() {
		return (
			<div>
				<TextInput
					label="Name"
					name="name"
					value={this.state.name}
					onChange={this.onChange}
					onBlur={this.onBlur}
				/>
				<CheckBox
					label="True or false"
					name="bool"
					value
					checked={this.state.bool}
					onChange={this.onChange}
					onBlur={this.onBlur}
				/>
			</div>
		);
	}
}

export default Settings;
