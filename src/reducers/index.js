import { combineReducers } from 'redux';
import DropDownReducer from './DropDownReducer';
import LeftMenuReducer from './LeftMenuReducer';

export default combineReducers({
    dropDown: DropDownReducer,
    leftMenu: LeftMenuReducer
})