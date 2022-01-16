import {TYPES} from "./actionTypes";

const initialState = {
    selectedProducts: [],
    selectedProductsNames: []
}

export const cartPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TYPES.ADD_SELECTED_PRODUCT): {
            return {
                ...state,
                selectedProducts: !state.selectedProductsNames.some(id => id === action.product.id) ? [...state.selectedProducts, action.product] : state.selectedProducts,
                selectedProductsNames: !state.selectedProductsNames.some(id => id === action.product.id) ? [...state.selectedProductsNames, action.product.id] : state.selectedProductsNames
            }
        }

        case(TYPES.INCREMENT): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.map(item => {
                    if(item.id === action.id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        }

        case(TYPES.DECREMENT): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.map((item, index) => {
                    if(item.id === action.id) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    else {
                        return item
                    }
                })
            }
        }

        case (TYPES.REMOVE_PRODUCT): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter((item, filterIndex) => {
                    if(item.quantity === 0) return filterIndex !== action.index
                    else return item
                }),
                selectedProductsNames: state.selectedProductsNames.filter((_item, index) => index === action.id)
            }
        }

        default:
            return state
    }
}

export const incrementQuantity = id => ({type: TYPES.INCREMENT, id})
export const decrementQuantity = id => ({type: TYPES.DECREMENT, id})
export const removeProduct = (index, id) => ({type: TYPES.REMOVE_PRODUCT, index, id})
export const addSelectedProduct = product => ({type: TYPES.ADD_SELECTED_PRODUCT, product})
