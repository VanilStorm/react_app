import {createStore, combineReducers} from "redux";
import {womenPageReducer} from "../reducers/womenPage/womenPageReducer";
import {currenciesReducer} from "../reducers/currencies/currenciesReducer";
import {cartPopupReducer} from "../reducers/cartPopup/cartPopupReducer";

const reducers = combineReducers({
    womenPage: womenPageReducer,
    currency: currenciesReducer,
    popup: cartPopupReducer
})

const store = createStore(reducers)

export default store