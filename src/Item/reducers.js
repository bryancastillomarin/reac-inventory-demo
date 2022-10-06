import {
    CREATE_ITEM,
    UPDATE_ITEM,
    GET_ITEM,
    GET_ITEMS_FILTERED,
    UPDATE_STATUS_ITEM,
    UPDATE_QUANTITY_ITEM,
    ITEM_ACTION_IN_PROGRESS,
    ITEM_ACTION_FAIL,
    NEW_ITEM,
    GET_ACTIVE_CATEGORIES,
    DELETE_ITEM
} from "./actions";

const initialItem = {
    category: { id: 0 },
    id: 0, name: "", description: "", status: null, quantity: 0
};

const initialState = { items: [], categories: [], initialItem, isLoading: false, modal: false };

export const itemReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_ITEM: {
            const { item } = payload;
            return {
                ...state,
                item: item,
                isLoading: false,
                modal: false
            };
        }
        case UPDATE_ITEM: { 
            const { item } = payload;
            return {
                ...state,
                item: item,
                isLoading: false,
                modal: false
            };
        }
        case GET_ITEM: { 
            const { item } = payload;
            return {
                ...state,
                item: item,
                isLoading: false,
                modal: false
            };
        }
        case GET_ITEMS_FILTERED: {
            const { items } = payload;
            return {
                ...state,
                items: items,
                isLoading: false,
                modal: false
            };
        }
        case UPDATE_STATUS_ITEM: {
            const { item } = payload;
            return {
                ...state,
                items: state.items.filter(filtered => filtered.id !== item.id),
                item: {
                    ...state.item,
                    status: item.status
                },
                isLoading: false,
                modal: false
            };
        }
        case UPDATE_QUANTITY_ITEM: {
            const { item } = payload;
            return {
                ...state,
                item: {
                    ...state.item,
                    quantity: item.quantity
                },
                isLoading: false,
                modal: false
            };
        }
        case NEW_ITEM: {
            const { categories } = payload;
            return {
                ...state,
                categories: categories,
                item: {...initialItem},
                isLoading: false,
                modal: false
            };
        }
        case GET_ACTIVE_CATEGORIES: {
            const { categories } = payload;
            return {
                ...state,
                categories: categories,
                isLoading: true,
                modal: false
            };
        }
        case DELETE_ITEM: {
            const { item } = payload;
            return {
                ...state,
                items: state.items.filter(filtered => filtered.id !== item.id),
                isLoading: false,
                modal: false
            }
        }
        case ITEM_ACTION_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
                modal: false
            }
        case ITEM_ACTION_FAIL:
            return {
                ...state,
                isLoading: false,
                modal: false
            }
        default:
            return state;
    }
}