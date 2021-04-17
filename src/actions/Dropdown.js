import { DDL_ADD_CLASS, DDL_REMOVE_CLASS } from './types';

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