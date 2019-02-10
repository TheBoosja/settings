import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Settings from './pages/Settings';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 62.5%;
	}

	body {
		font-size: ${({ theme }) => theme.fontSize};
	}
`;

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={this.props.theme}>
				<React.Fragment>
					<GlobalStyle />
					<Settings />
				</React.Fragment>
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
