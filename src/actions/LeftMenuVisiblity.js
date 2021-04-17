import { TOGGLE_LEFT_BAR, TOGGLE_SUB_MENU } from './types';
export function toggleLeftBar(showHide) {
    return {
        type: TOGGLE_LEFT_BAR,
    }
}

export function toggleLeftMenu(payload) {
    return {
        type: TOGGLE_SUB_MENU,
        payload: payload
    }
}