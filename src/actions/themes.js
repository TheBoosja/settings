const THEME_CHANGE = 'SETTING_CHANGE';

export function changeTheme(themeId) {
	return {
		type: THEME_CHANGE,
		payload: themeId
	};
}

export default function themes(state = themeA, action) {
	switch (action.type) {
		case THEME_CHANGE:
			switch (action.payload) {
				case 0:
					return themeA;
				case 1:
					return themeB;
				default:
					return state;
			}
		default:
			return state;
	}
}

const ratio = 1;

// THEMES
const themeA = {
	primary: '#65B7EE',
	secondary: '#3DA7EE',

	// Sizing
	fontSize:  `${1.4}rem`,
	standardSize: `${2 * ratio}rem`,
	standardSpace: `${.5 * ratio}rem`,
	largeSpace: `${ratio}rem`
};

const themeB = {
	primary: 'orangered',
	secondary: 'red'
};