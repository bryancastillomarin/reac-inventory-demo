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

export const ACTIVATE_CATEGORY = "ACTIVATE_CATEGORY";
export const activateCategory = category => ({
    type: ACTIVATE_CATEGORY,
    payload: { category }
});

export const INACTIVATE_CATEGORY = "INACTIVATE_CATEGORY";
export const inactivateCategory = category => ({
    type: INACTIVATE_CATEGORY,
    payload: { category }
});

export const CATEGORY_ACTION_IN_PROGRESS = "CATEGORY_ACTION_IN_PROGRESS";
export const categoryActionInProgress = () => ({
    type: CATEGORY_ACTION_IN_PROGRESS
});

export const CATEGORY_ACTION_FAIL = "CATEGORY_ACTION_FAIL";
export const categoryActionFail = () => ({
    type: CATEGORY_ACTION_FAIL
});

export const NEW_CATEGORY = "NEW_CATEGORY";
export const newCategory = () => ({
    type: NEW_CATEGORY
});