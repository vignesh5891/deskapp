import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DropDownReducer from './DropDownReducer';
import LeftMenuReducer from './LeftMenuReducer';

export default combineReducers({
    form: formReducer,
    dropDown: DropDownReducer,
    leftMenu: LeftMenuReducer
})