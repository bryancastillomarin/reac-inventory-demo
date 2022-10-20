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
    deleteItem,
    showQuantityItemModal,
    hideQuantityItemModal
} from "./actions";

import { changeTitle } from "../Menu/actions";
import { TITLE_ITEM } from "../Menu/Menu";

export const getItemsFilteredRequest = (item = { category: {id: 0}, status: true} ) => async (dispatch) => {
    try {
        dispatch(itemActionInProgress());
        const response = await fetch(`http://localhost:8080/api/item/${item.status}/${item.category.id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const items = await response.json();
        if(isResponseError(items))
            throw new Error(items.message);
        await getActiveCategoriesRequest()(dispatch);
        dispatch(getItemsFiltered(items));
    } catch(error) {
        dispatch(itemActionFail(error.message));
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
        if(isResponseError(categories))
            throw new Error(categories.message);
        dispatch(getActiveCategories(categories));
    } catch(error) {
        dispatch(itemActionFail(error.message));
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
        if(isResponseError(updatedItem))
            throw new Error(updatedItem.message);
        dispatch(updateStatusItem(updatedItem));
    } catch(error) {
        dispatch(itemActionFail(error.message));
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
        if(isResponseError(updatedItem))
            throw new Error(updatedItem.message);
        dispatch(updateQuantityItem(updatedItem));
    } catch(error) {
        dispatch(itemActionFail(error.message));
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
        if(isResponseError(deletedItem))
            throw new Error(deletedItem.message);
        dispatch(deleteItem(deletedItem));
    } catch(error) {
        dispatch(itemActionFail(error.message));
    }
};

export const showQuantityItemModalAction = (item) => (dispatch) => {
    dispatch(showQuantityItemModal(item));
};

export const hideQuantityItemModalAction = () => (dispatch) => {
    dispatch(hideQuantityItemModal());
};

export const openNewItemForm = () => async (dispatch) => {
    await getActiveCategoriesRequest()(dispatch);
    dispatch(newItem());
};

export const createItemRequest = (item) => async dispatch => {
    try {
        dispatch(itemActionInProgress());
        const body = JSON.stringify(item);
        const response = await fetch("http://localhost:8080/api/item", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body
        });
        const createdItem = await response.json();
        if(isResponseError(createdItem))
            throw new Error(createdItem.message);
        dispatch(createItem(createdItem));
    } catch(error) {
        dispatch(itemActionFail(error.message));
    }
};

export const updateItemRequest = (item) => async dispatch => {
    try {
        dispatch(itemActionInProgress());
        const body = JSON.stringify(item);
        const response = await fetch("http://localhost:8080/api/item", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body
        });
        const updatedItem = await response.json();
        if(isResponseError(updatedItem))
            throw new Error(updatedItem.message);
        dispatch(updateItem(updatedItem));
    } catch(error) {
        dispatch(itemActionFail(error.message));
    }
};

export const getItemRequest = (item) => async dispatch => {
    try {
        dispatch(itemActionInProgress());
        const response = await fetch(`http://localhost:8080/api/item/details/${item.category.id}/${item.id}`);
        const gettedItem = await response.json();
        if(isResponseError(gettedItem))
            throw new Error(gettedItem.message);
        dispatch(getItem(gettedItem));
        dispatch(changeTitle(TITLE_ITEM));
    } catch(error) {
        dispatch(itemActionFail(error.message));
    }
};

const isResponseError = json => json.timestamp && json.message;