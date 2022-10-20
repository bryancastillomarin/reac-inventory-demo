import { 
    createCategory,
    updateCategory,
    getCategory,
    getCategoriesFiltered,
    updateStatusCategory,
    categoryActionInProgress,
    categoryActionFail,
    newCategory,
    hideError
} from "./actions";

import { changeTitle } from "../Menu/actions";
import { TITLE_CATEGORY } from "../Menu/Menu";

export const getCategoriesFilteredRequest = (state = true) => async (dispatch) => {
    try {
        dispatch(categoryActionInProgress());
        const response = await fetch(`http://localhost:8080/api/category/${state}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const categories = await response.json();
        if(responseIsError(categories))
            throw new Error(categories.message);
        dispatch(getCategoriesFiltered(categories));
    } catch(error) {
        dispatch(categoryActionFail(error.message));
    }
};

export const createCategoryRequest = (category) => async (dispatch) => {
    try {
        dispatch(categoryActionInProgress());
        const body = JSON.stringify(category);
        const response = await fetch("http://localhost:8080/api/category", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "post",
            body
        });
        const createdCategory = await response.json();
        if(responseIsError(createdCategory))
            throw new Error(createdCategory.message);
        dispatch(createCategory(createdCategory));
    } catch(error) {
        dispatch(categoryActionFail(error.message));
    }
};

export const updateCategoryRequest = (category) => async (dispatch) => {
    try {
        dispatch(categoryActionInProgress());
        const body = JSON.stringify(category);
        const response = await fetch("http://localhost:8080/api/category", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "put",
            body
        });
        const updatedCategory = await response.json();
        if(responseIsError(updatedCategory))
            throw new Error(updatedCategory.message);
        dispatch(updateCategory(updatedCategory));
    } catch(error) {
        dispatch(categoryActionFail(error.message));
    }
}

export const updateStatusCategoryRequest = (category) => async (dispatch) => {
    try {
        dispatch(categoryActionInProgress());
        const body = JSON.stringify(category);
        const response = await fetch("http://localhost:8080/api/category/status", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body
        });
        const updatedCategory = await response.json();
        if(responseIsError(updateCategory))
            throw new Error(updateCategory.message);
        dispatch(updateStatusCategory(updatedCategory));
    } catch(error) {
        dispatch(categoryActionFail(error.message));
    }
}

export const getCategoryRequest = (id) => async (dispatch) => {
    try {
        dispatch(categoryActionInProgress());
        const response = await fetch(`http://localhost:8080/api/category/details/${id}`);
        const category = await response.json();
        if(responseIsError(category))
            throw new Error(category.message);
        dispatch(getCategory(category));
        dispatch(changeTitle(TITLE_CATEGORY));
    } catch(error) {
        dispatch(categoryActionFail(error.message));
    }
}

export const openNewCategoryForm = () => dispatch => {
    dispatch(newCategory());
}

export const hideMessageError = () => dispatch => {
    dispatch(hideError());
}

const responseIsError = json => json.timestamp && json.message;