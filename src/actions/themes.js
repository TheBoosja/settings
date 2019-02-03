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

// THEMES
const themeA = {
	primary: '#65B7EE',
	secondary: '#3DA7EE'
};

const themeB = {
	primary: 'orangered',
	secondary: 'red'
};