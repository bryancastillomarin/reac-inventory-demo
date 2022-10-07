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
        dispatch(createItem(createdItem));
    } catch(error) {
        dispatch(itemActionFail());
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
        dispatch(updateItem(updatedItem));
    } catch(error) {
        dispatch(itemActionFail());
    }
};

export const getItemRequest = (item) => async dispatch => {
    try {
        dispatch(itemActionInProgress());
        const response = await fetch(`http://localhost:8080/api/item/details/${item.category.id}/${item.id}`);
        const gettedItem = await response.json();
        dispatch(getItem(gettedItem));
        dispatch(changeTitle(TITLE_ITEM));
    } catch(error) {
        dispatch(itemActionFail());
    }
}