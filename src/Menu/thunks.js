import { changeTitle } from "./actions";

export const changeMainTitle = (title)  => (dispatch)=> {
    dispatch(changeTitle(title));
}