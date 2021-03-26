import { TOGGLE_LEFT_BAR } from '../actions/types';
const INITIAL_STATE = { visibleState: false }

export default function LeftMenuReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_LEFT_BAR:
            return { ...state, visibleState: !state.visibleState };
        default:
            return state
    }

}