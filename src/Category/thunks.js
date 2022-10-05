import { 
    createCategory,
    updateCategory,
    getCategory,
    getCategoriesFiltered,
    updateStatusCategory,
    categoryActionInProgress,
    categoryActionFail,
    newCategory
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
        dispatch(getCategoriesFiltered(categories));
    } catch(error) {
        dispatch(categoryActionFail());
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
        dispatch(createCategory(createdCategory));
    } catch(error) {
        dispatch(categoryActionFail());
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
        dispatch(updateCategory(updatedCategory));
    } catch(error) {
        dispatch(categoryActionFail);
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
        dispatch(updateStatusCategory(updatedCategory));
    } catch(error) {
        dispatch(categoryActionFail);
    }
}

export const getCategoryRequest = (id) => async (dispatch) => {
    try {
        dispatch(categoryActionInProgress());
        const response = await fetch(`http://localhost:8080/api/category/details/${id}`);
        const category = await response.json();
        dispatch(getCategory(category));
        dispatch(changeTitle(TITLE_CATEGORY));
    } catch(error) {
        dispatch(categoryActionFail());
    }
}

export const openNewCategoryForm = () => dispatch => {
    dispatch(newCategory());
}