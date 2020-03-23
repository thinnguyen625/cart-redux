import * as Types from './../constants/ActionType'

export const actAddToCart = (product, quanlity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quanlity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}