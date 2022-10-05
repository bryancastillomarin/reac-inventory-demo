import { 
    createCategory,
    updateCategory,
    getCategory,
    getCategoriesFiltered,
    activateCategory,
    inactivateCategory,
    categoryActionInProgress,
    categoryActionFail,
    newCategory
} from "./actions";

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

export const openNewCategoryForm = () => dispatch => {
    dispatch(newCategory());
}