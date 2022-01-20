import {TYPES} from "./actionTypes";

const initialState = {
    categories: [],
    currentProducts: [],
    category: '',
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case TYPES.GET_CATEGORY: {
            return {
                ...state,
                category: action.category
            }
        }
        case TYPES.GET_PRODUCT_CATEGORY: {
            return {
                ...state,
                currentProducts: action.product
            }
        }
        default:
            return state
    }
}


export const getCategory = category => ({type: TYPES.GET_CATEGORY, category});
export const getCategories = categories => ({type: TYPES.GET_CATEGORIES, categories});
export const getProductCategory = product => ({type: TYPES.GET_PRODUCT_CATEGORY, product});
