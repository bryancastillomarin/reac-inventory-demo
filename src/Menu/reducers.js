import { CHANGE_TITLE } from "./actions";

const initialState = { title: "Categories List" };

export const menuReducers = (state = initialState, action) => {
    const {type, payload } = action;

    switch(type) {
        case CHANGE_TITLE:
            const title = payload;
            return {
                ...state,
                title: title
            };
        default:
            return state;
    }
}