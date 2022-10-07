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
    DELETE_ITEM,
    SHOW_QUANTITY_ITEM_MODAL,
    HIDE_QUANTITY_ITEM_MODAL
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
                item: {
                    ...item,
                    quantity: state.item.quantity
                },
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
                items: state.items.map(mapped => {
                    if(mapped.id === item.id)
                        return {...mapped, quantity: item.quantity};
                    return mapped;
                }),
                item: {
                    ...state.item,
                    quantity: item.quantity
                },
                isLoading: false,
                modal: false
            };
        }
        case SHOW_QUANTITY_ITEM_MODAL: {
            const { item } = payload;
            return {
                ...state,
                item: item,
                isLoading: false,
                modal: true
            }
        }
        case HIDE_QUANTITY_ITEM_MODAL: {
            return {
                ...state,
                isLoading: false,
                modal: false
            }
        }
        case NEW_ITEM: {
            return {
                ...state,
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