import {TYPES} from "./actionTypes";

const initialState = {
    selectedProducts: [],
    productInd: [],
}

export const cartPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TYPES.ADD_SELECTED_PRODUCT): {
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.product],
                productInd: [...state.selectedProducts.map((item,index) => {
                    return index
                })]

            }
        }

        case (TYPES.FILTER): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter((item, index) => {
                    if(item.quantity === 1) {
                        if(item.id === action.product.id && item.size === action.product.size &&
                            item.color === action.product.color && item.capacity === action.product.capacity) {
                            return index === state.selectedProducts.findIndex(_item => {
                                return _item.id === action.product.id && _item.size === action.product.size &&
                                    _item.color === action.product.color && _item.capacity === action.product.capacity
                            })
                        }
                    }
                    return item
                }),
            }
        }

        case(TYPES.INCREMENT): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.map(item => {
                    if (item.id === action.product.id && item.size === action.product.size &&
                         item.color === action.product.color && item.capacity === action.product.capacity) {
                        return {...item, quantity: item.quantity + 1}
                    } else return item

                })
            }
        }

        case(TYPES.DECREMENT): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.map((item, index) => {
                    if(item.id === action.product.id && item.size === action.product.size &&
                        item.color === action.product.color && item.capacity === action.product.capacity) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    else return item
                })
            }
        }

        case (TYPES.REMOVE_PRODUCT): {
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter((item, filterIndex) => {
                    if(item.quantity <= 0) return filterIndex !== action.index
                    else return item
                })
            }
        }

        default:
            return state
    }
}

export const incrementQuantity = product => ({type: TYPES.INCREMENT, product})
export const decrementQuantity = product => ({type: TYPES.DECREMENT, product})
export const removeProduct = (index, id) => ({type: TYPES.REMOVE_PRODUCT, index, id})
export const productFilter = product => ({type: TYPES.FILTER,product})
export const addSelectedProduct = product => ({type: TYPES.ADD_SELECTED_PRODUCT, product})
