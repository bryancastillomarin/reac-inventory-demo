import { 
    createCategory,
    updateCategory,
    getCategory,
    getCategoriesFiltered,
    activateCategory,
    inactivateCategory,
    categoryActionInProgress,
    categoryActionFail
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