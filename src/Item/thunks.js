import {
    createItem,
    updateItem,
    getItem,
    getItemsFiltered,
    updateStatusItem,
    updateQuantityItem,
    itemActionInProgress,
    itemActionFail,
    newItem,
    getActiveCategories
} from "./actions";

import { changeTitle } from "../Menu/actions";
import { TITLE_CATEGORY } from "../Menu/Menu";

export const getItemsFilteredRequest = (item = { category: {id: 0}, status: true} ) => async (dispatch) => {
    try {
        dispatch(itemActionInProgress());
        const response = await fetch(`http://localhost:8080/api/item/${item.status}/${item.category.id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const items = await response.json();
        getActiveCategoriesRequest()(dispatch);
        dispatch(getItemsFiltered(items));
    } catch(error) {
        dispatch(itemActionFail());
    }
};

const getActiveCategoriesRequest = () => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8080/api/category/true", {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const categories = await response.json();
        dispatch(getActiveCategories(categories));
    } catch(error) {
        dispatch(itemActionFail());
    }
}