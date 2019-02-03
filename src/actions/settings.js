const SETTING_CHANGE = 'SETTING_CHANGE';

export function saveSettings(setting) {
	return {
		type: SETTING_CHANGE,
		payload: setting
	};
}

export default function settings(state = {}, action) {
	switch (action.type) {
		case SETTING_CHANGE:
			break;
		default:
			return state;
	}
}