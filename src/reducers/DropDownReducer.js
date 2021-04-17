import { DDL_ADD_CLASS, DDL_REMOVE_CLASS } from '../actions/types';

export const DropDownReducer = (state = { dropDownClass: '' }, action) => {
    switch (action.type) {
        case DDL_ADD_CLASS:
            return { ...state, dropDownClass: action.payload }
        case DDL_REMOVE_CLASS:
            return { ...state, dropDownClass: '' }
        default:
            return state
    }
}
