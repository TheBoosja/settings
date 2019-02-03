import { combineReducers } from 'redux';
import settings from './settings';
import theme from './themes';

const reducers = combineReducers({
	theme,
	settings
});

export default reducers;