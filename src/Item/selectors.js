export const getItems = state => state.itemReducers.items;
export const getItem = state => state.itemReducers.item;
export const getItemIsLoading = state => state.itemReducers.isLoading;
export const getCategoriesForItems = state => state.itemReducers.categories;
export const showModal = state => state.itemReducers.modal;