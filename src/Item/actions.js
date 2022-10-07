export const CREATE_ITEM = "CREATE_ITEM";
export const createItem = item => ({
    type: CREATE_ITEM,
    payload: { item }
});

export const UPDATE_ITEM = "UPDATE_ITEM";
export const updateItem = item => ({
    type: UPDATE_ITEM,
    payload: { item }
});

export const GET_ITEM = "GET_ITEM";
export const getItem = item => ({
    type: GET_ITEM,
    payload: { item }
});

export const GET_ITEMS_FILTERED = "GET_ITEMS_FILTERED";
export const getItemsFiltered = items => ({
    type: GET_ITEMS_FILTERED,
    payload: { items }
});

export const UPDATE_STATUS_ITEM = "UPDATE_STATUS_ITEM";
export const updateStatusItem = item => ({
    type: UPDATE_STATUS_ITEM,
    payload: { item }
});

export const UPDATE_QUANTITY_ITEM = "UPDATE_QUANTITY_ITEM";
export const updateQuantityItem = item => ({
    type: UPDATE_QUANTITY_ITEM,
    payload: { item }
});

export const ITEM_ACTION_IN_PROGRESS = "ITEM_ACTION_IN_PROGRESS";
export const itemActionInProgress = () => ({
    type: ITEM_ACTION_IN_PROGRESS
});

export const ITEM_ACTION_FAIL = "ITEM_ACTION_FAIL";
export const itemActionFail = () => ({
    type: ITEM_ACTION_FAIL
});

export const NEW_ITEM = "NEW_ITEM";
export const newItem = () => ({
    type: NEW_ITEM
});

export const GET_ACTIVE_CATEGORIES = "GET_ACTIVE_CATEGORIES";
export const getActiveCategories = (categories) => ({
    type: GET_ACTIVE_CATEGORIES,
    payload: { categories }
});

export const DELETE_ITEM = "DELETE_ITEM";
export const deleteItem = (item) => ({
    type: DELETE_ITEM,
    payload: { item }
});

export const SHOW_QUANTITY_ITEM_MODAL = "SHOW_QUANTITY_ITEM_MODAL";
export const showQuantityItemModal = (item) => ({
    type: SHOW_QUANTITY_ITEM_MODAL,
    payload: { item }
});

export const HIDE_QUANTITY_ITEM_MODAL = "HIDE_QUANTITY_ITEM_MODAL";
export const hideQuantityItemModal = () => ({
    type: HIDE_QUANTITY_ITEM_MODAL
});