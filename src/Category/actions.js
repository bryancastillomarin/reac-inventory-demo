export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const createCategory = category => ({
    type: CREATE_CATEGORY,
    payload: { category }
});

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    payload: { category }
});

export const GET_CATEGORY = "GET_CATEGORY";
export const getCategory = category => ({
    type: GET_CATEGORY,
    payload: { category }
});

export const GET_CATEGORIES_FILTERED = "GET_CATEGORIES_FILTERED";
export const getCategoriesFiltered = categories => ({
    type: GET_CATEGORIES_FILTERED,
    payload: { categories }
});

export const UPDATE_STATUS_CATEGORY = "UPDATE_STATUS_CATEGORY";
export const updateStatusCategory = category => ({
    type: UPDATE_STATUS_CATEGORY,
    payload: { category }
});

export const CATEGORY_ACTION_IN_PROGRESS = "CATEGORY_ACTION_IN_PROGRESS";
export const categoryActionInProgress = () => ({
    type: CATEGORY_ACTION_IN_PROGRESS
});

export const CATEGORY_ACTION_FAIL = "CATEGORY_ACTION_FAIL";
export const categoryActionFail = (error) => ({
    type: CATEGORY_ACTION_FAIL,
    payload: error
});

export const NEW_CATEGORY = "NEW_CATEGORY";
export const newCategory = () => ({
    type: NEW_CATEGORY
});

export const HIDE_ERROR = "HIDE_ERROR";
export const hideError = () => ({
    type: HIDE_ERROR
});