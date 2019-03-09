const THEME_CHANGE = 'THEME_CHANGE';

export function changeTheme(themeId) {
	console.log('action', themeId);
	return {
		type: THEME_CHANGE,
		payload: themeId
	};
}

export default function themes(state = themeA, action) {
	console.log('reducer', action);
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

// Sizing
const sizing = {
	fontSize:  `${1.4}rem`,
	standardSize: `${2 * ratio}rem`,
	standardSpace: `${.5 * ratio}rem`,
	largeSpace: `${ratio}rem`
};

// THEMES
const themeA = {
	primary: '#65B7EE',
	secondary: '#3DA7EE',

	...sizing
};

const themeB = {
	primary: 'orangered',
	secondary: 'red',

	...sizing
};