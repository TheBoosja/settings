import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import Settings from './pages/Settings';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={this.props.theme}>
				<Settings />
			</ThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	console.log('theme', state.theme)
	return {
		theme: state.theme
	};
}

export default connect(mapStateToProps)(App);
