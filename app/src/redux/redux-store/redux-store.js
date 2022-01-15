import {createStore, combineReducers} from "redux";
import {womenPageReducer} from "../reducers/womenPage/womenPageReducer";
import {currenciesReducer} from "../reducers/currencies/currenciesReducer";
import {popupReducer} from "../reducers/popup/popupReducer";

const reducers = combineReducers({
    womenPage: womenPageReducer,
    currency: currenciesReducer,
    popup: popupReducer
})

const store = createStore(reducers)

export default store