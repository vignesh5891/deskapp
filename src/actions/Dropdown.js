import { DDL_ADD_CLASS, DDL_REMOVE_CLASS, TOGGLE_DROPDOWN } from './types';

export function addDropDwonClass(classArray) {
    return {
        type: DDL_ADD_CLASS,
        payload: classArray
    }
}

export function removeDropDwonClass(classArray) {
    return {
        type: DDL_REMOVE_CLASS,
        payload: classArray
    }
}

export function toggleDropDownClass(classArray) {
    return {
        type: TOGGLE_DROPDOWN,
        payload: classArray
    }
}