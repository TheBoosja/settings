import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';
import RadioButton from '../../components/RadioButton';
import RadioGroup from '../../components/RadioGroup';

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			bool: false,
			radio: 0
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
		let { name, value } = e.target;

		if (name === 'bool') {
			value = !this.state.bool
			console.log('CHECKED', value)
		}
		else if (name.includes('radio')) {
			name = 'radio';
		}

		this.setState({
			[name]: value
		}, () => console.log('onChange', this.state));
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
					checked={this.state.bool}
					onChange={this.onChange}
					onBlur={this.onBlur}
				/>
				<RadioGroup label='This one, or this one?'>
					<RadioButton
						name='radio1'
						label='One'
						value={1}
						checked={this.state.radio === '1'}
						onChange={this.onChange}
						onBlur={this.onBlur}
					/>
					<RadioButton
						name='radio2'
						label='Two'
						value={2}
						checked={this.state.radio === '2'}
						onChange={this.onChange}
						onBlur={this.onBlur}
					/>
					<RadioButton
						name='radio3'
						label='Three'
						value={3}
						checked={this.state.radio === '3'}
						onChange={this.onChange}
						onBlur={this.onBlur}
					/>
				</RadioGroup>
			</div>
		);
	}
}

export default Settings;
