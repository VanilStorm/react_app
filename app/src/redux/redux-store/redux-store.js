import {createStore, combineReducers} from "redux";
import {mainPageReducer} from "../reducers/mainPage/mainPageReducer";
import {currenciesReducer} from "../reducers/currencies/currenciesReducer";
import {cartPopupReducer} from "../reducers/cartPopup/cartPopupReducer";

const reducers = combineReducers({
    mainPage: mainPageReducer,
    currency: currenciesReducer,
    cartPopup: cartPopupReducer
})

const store = createStore(reducers)

export default store