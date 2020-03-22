import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initState = data ? data : [];

const cart = (state = initState, action) => {
    var { product, quanlity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quanlity += quanlity;
            } else {
                state.push({
                    product,
                    quanlity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;