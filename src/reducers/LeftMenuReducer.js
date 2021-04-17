import { TOGGLE_LEFT_BAR, TOGGLE_SUB_MENU } from '../actions/types';

export const LeftMenuReducer = (state = { visibleState: false }, action) => {
    switch (action.type) {
        case TOGGLE_LEFT_BAR:
            return { ...state, visibleState: !state.visibleState };
        default:
            return state
    }
}

export const lmenuDropDownReducer = (state = { activeMenu: '' }, action) => {
    switch (action.type) {
        case TOGGLE_SUB_MENU:
            const activeMenu = state.activeMenu === action.payload ? '' : action.payload;
            return { ...state, activeMenu }
        default:
            return state
    }
}
