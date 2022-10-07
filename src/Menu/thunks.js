import { changeTitle } from "./actions";
import { newCategory } from "../Category/actions";
import { newItem } from "../Item/actions";

export const changeMainTitle = (title)  => (dispatch)=> {
    dispatch(changeTitle(title));
};

export const newCategoryForm = () => (dispatch) => {
    dispatch(newCategory());
};

export const newItemForm = () => (dispatch) => {
    dispatch(newItem());
}