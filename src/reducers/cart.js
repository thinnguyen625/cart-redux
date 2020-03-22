import * as Types from './../constants/ActionType';
//var data = JSON.parse(localStorage.getItem('CART'));
var initState = [
    {
        product: {
            id: 1,
            name: 'Iphone 11 Pro Max',
            image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
            description: 'Sản phẩm do apple sản xuất',
            price: 500,
            inventory: 10,
            rating: 5
        },
        quanlity: 5
    },
    {
        product: {
            id: 3,
            name: 'Macbook Pro 2020',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg',
            description: 'Sản phẩm do apple sản xuất',
            price: 2500,
            inventory: 10,
            rating: 5
        },
        quanlity: 2
    }
];

const cart = (state = initState, action) => {
    var { product, quanlity } = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            state.push({
                product,
                quanlity
            });
            return [...state];
        default: return [...state];
    }
}

export default cart;