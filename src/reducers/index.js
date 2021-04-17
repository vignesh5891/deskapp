import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { DropDownReducer } from './DropDownReducer';
import { LeftMenuReducer, lmenuDropDownReducer } from './LeftMenuReducer';

export default combineReducers({
    form: formReducer,
    dropDown: DropDownReducer,
    lmenuDropDown: lmenuDropDownReducer,
    leftMenu: LeftMenuReducer
})