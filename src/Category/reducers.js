import {
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    GET_CATEGORY,
    GET_CATEGORIES_FILTERED,
    UPDATE_STATUS_CATEGORY,
    CATEGORY_ACTION_IN_PROGRESS,
    CATEGORY_ACTION_FAIL,
    NEW_CATEGORY
} from "./actions"

const initialCategory = {
    id: 0, name: "", description: "", status: null
};

const initialState = { categories: [], initialCategory, isLoading: false };

export const categoryReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_CATEGORY: {
            const { category } = payload;
            return {
                ...state,
                category: category,
                isLoading: false
            }
        }
        case UPDATE_CATEGORY: {
            const { category } = payload;
            return {
                ...state,
                category: category,
                isLoading: false
            }
        }
        case GET_CATEGORY: {
            const { category } = payload;
            return {
                ...state,
                category: category,
                isLoading: false
            }
        }
        case GET_CATEGORIES_FILTERED: {
            const { categories } = payload;
            return {
                ...state,
                categories: categories,
                isLoading: false
            }
        }
        case UPDATE_STATUS_CATEGORY: {
            const { category } = payload;
            return {
                ...state,
                categories: state.categories.filter(filtered => filtered.id !== category.id),
                category: {
                    ...state.category,
                    status: category.status
                },
                isLoading: false
            }
        }
        case NEW_CATEGORY: {
            return {
                ...state,
                category: {...initialCategory},
                isLoading: false
            }
        }
        case CATEGORY_ACTION_IN_PROGRESS:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORY_ACTION_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};