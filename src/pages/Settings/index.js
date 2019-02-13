import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';
import RadioButton from '../../components/RadioButton';
import RadioGroup from '../../components/RadioGroup';
import SelectBox from '../../components/SelectBox';
import OptionItem from '../../components/OptionItem';

const Layout = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: ${({ theme }) => theme.largeSpace};
	margin: 1rem 50rem;
`;

const SettingsBox = styled.div`
	background-color: #f4f4f4;
	border: 1px solid #e8e8e8;
	padding: 1rem;
`;

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			bool: false,
			radio: 0,
			select: 2
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
		const renderBox = (extras) => {
			return (
				<SettingsBox>
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
					<SelectBox
						name='select'
						label='Select a value'
						value={this.state.select}
						onChange={this.onChange}
					>
						<OptionItem value={0}>Select a value</OptionItem>
						<OptionItem value={1}>One</OptionItem>
						<OptionItem value={2}>Two</OptionItem>
						<OptionItem value={3}>Three</OptionItem>
					</SelectBox>
					{extras}
				</SettingsBox>
			);
		}

		return (
			<Layout>
				<SettingsBox>
					<SelectBox
						name='theme'
						label='Color theme'
						value={this.state.themeId}
						onChange={this.onChange}
					>
						<OptionItem value={0}>Blue</OptionItem>
						<OptionItem value={1}>Red</OptionItem>
					</SelectBox>
				</SettingsBox>
			</Layout>
		);
	}
}

export default Settings;
