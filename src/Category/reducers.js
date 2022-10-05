import {
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    GET_CATEGORY,
    GET_CATEGORIES_FILTERED,
    ACTIVATE_CATEGORY,
    INACTIVATE_CATEGORY,
    CATEGORY_ACTION_IN_PROGRESS,
    CATEGORY_ACTION_FAIL,
    NEW_CATEGORY
} from "./actions"

const category = {
    id: 0, name: "", description: "", status: null
};

const initialState = { categories: [], category, isLoading: false };

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
        case ACTIVATE_CATEGORY: {
            const { category } = payload;
            return {
                ...state,
                categories: state.categories.map(mappedCategory => {
                    if (mappedCategory.id === category.id)
                        return category;
                    return mappedCategory;
                }),
                category: category,
                isLoading: false
            }
        }
        case INACTIVATE_CATEGORY: {
            const { category } = payload;
            return {
                ...state,
                categories: state.categories.map(mappedCategory => {
                    if (mappedCategory.id === category.id)
                        return category;
                    return mappedCategory;
                }),
                category: category,
                isLoading: false
            }
        }
        case NEW_CATEGORY: {
            return {
                ...state,
                category: category,
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