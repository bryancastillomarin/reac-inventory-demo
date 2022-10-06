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
    getActiveCategories,
    deleteItem
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
        await getActiveCategoriesRequest()(dispatch);
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
};

export const updateStatusItemRequest = (item) => async (dispatch) => {
    try {
        dispatch(itemActionInProgress());
        const body = JSON.stringify(item);
        const response = await fetch("http://localhost:8080/api/item/status", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body
        });
        const updatedItem = await response.json();
        dispatch(updateStatusItem(updatedItem));
    } catch(error) {
        dispatch(itemActionFail());
    }
};

export const updateQuantityItemRequest = (item) => async (dispatch) => {
    try {
        dispatch(itemActionInProgress());
        const body = JSON.stringify(item);
        const response = await fetch("http://localhost:8080/api/item/quantity", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body
        });
        const updatedItem = await response.json();
        dispatch(updateQuantityItem(updatedItem));
    } catch(error) {
        dispatch(itemActionFail());
    }
};

export const deleteItemRequest = (item) => async (dispatch) => {
    try {
        dispatch(itemActionInProgress());
        const body = JSON.stringify(item);
        const response = await fetch("http://localhost:8080/api/item", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE",
            body
        });
        const deletedItem = await response.json();
        dispatch(deleteItem(deletedItem));
    } catch(error) {
        dispatch(itemActionFail());
    }
};