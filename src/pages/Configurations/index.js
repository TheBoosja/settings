import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../../actions/themes';
import { SettingsBox, Layout } from '../Settings';
import SelectBox from '../../components/SelectBox';
import OptionItem from '../../components/OptionItem';

class Configurations extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bgClr: '#ffffff'
		};

		this.randomColor = this.randomColor.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	randomColor() {
		this.setState({
			bgClr: "#" + Math.floor(Math.random() * 0xffffff).toString(16)
		});
	}

	onChange(e) {
		if (e.target.name === 'theme') {
			const themeId = parseInt(e.target.value);
			console.log('change event', themeId);
			this.props.changeTheme(themeId);
		}
	}

	render() {
		return (
			<Layout>
				<SettingsBox style={{ backgroundColor: this.state.bgClr }}>
					<button onClick={this.randomColor}>Change background</button>
					<SelectBox
						name='theme'
						label='Select a theme'
						value={this.state.theme}
						onChange={this.onChange}
					>
						<OptionItem value={0}>Blue theme</OptionItem>
						<OptionItem value={1}>Red theme</OptionItem>
						<OptionItem value={2}>Two</OptionItem>
						<OptionItem value={3}>Three</OptionItem>
					</SelectBox>
				</SettingsBox>
			</Layout>
		);
	}
}

export default connect(null, {
	changeTheme
})(Configurations);
