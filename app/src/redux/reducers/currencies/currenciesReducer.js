import {TYPES} from "./actionTypes";

const initialState = {
    currencies: [],
    currentId: 0,
    currentSymbol: '$'
}

export const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_ALL_CURRENCIES: {
            return {
                ...state,
                currencies: action.currencies
            }
        }
        case TYPES.GET_CURRENT_ID: {
            return {
                ...state,
                currentId: action.id
            }
        }
        case TYPES.GET_CURRENT_SYMBOL: {
            return {
                ...state,
                currentSymbol: action.symbol
            }
        }
        default:
            return state
    }
}

export const getCurrencies = currencies => ({type: TYPES.GET_ALL_CURRENCIES, currencies})
export const getCurrentId = id => ({type: TYPES.GET_CURRENT_ID, id})
export const getCurrentSymbol = symbol => ({type: TYPES.GET_CURRENT_SYMBOL, symbol})