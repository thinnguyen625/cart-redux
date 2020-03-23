import * as types from './../constants/ActionType'

export const actAddToCart = (product, quanlity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quanlity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}