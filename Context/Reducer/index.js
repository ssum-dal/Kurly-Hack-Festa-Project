import { combineReducers } from 'redux'
import badgeReducer from './badgeReducer';

const reducers = combineReducers({
	badge: badgeReducer,
});

export default reducers;