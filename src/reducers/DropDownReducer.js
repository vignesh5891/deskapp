import { DDL_ADD_CLASS, DDL_REMOVE_CLASS } from '../actions/types';

const INTIAL_STATE = { dropDownClass: '' }

export default function DropDownReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case DDL_ADD_CLASS:
            return { ...state, dropDownClass: action.payload }
        case DDL_REMOVE_CLASS:
            return { ...state, dropDownClass: '' }
        default:
            return state
    }
}
