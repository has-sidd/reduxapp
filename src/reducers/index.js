import { combineReducers } from 'redux';
import changeNum from './numChange';

const rootReducer = combineReducers({
	changeNum,
});

export default rootReducer;
