import { LOAD_CATEGORIES } from '../actions/types'

export function categoryReducer(state = {}, action) {
    const { categories } = action;
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                categories
            };
        default:
            return state;
    }
}