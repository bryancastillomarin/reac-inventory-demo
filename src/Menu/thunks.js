import { changeTitle } from "./actions";
import { newCategory } from "../Category/actions";

export const changeMainTitle = (title)  => (dispatch)=> {
    dispatch(changeTitle(title));
};

export const newCategoryForm = () => (dispatch) => {
    dispatch(newCategory());
};