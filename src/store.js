import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducers } from "./Category/reducers";
import { itemReducers } from "./Item/reducers";
import { menuReducers } from "./Menu/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    categoryReducers, menuReducers, itemReducers
};

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
    createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
;