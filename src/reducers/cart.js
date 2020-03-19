import * as types from './../constants/ActionType';



var data = JSON.parse(localStorage.getItem('CART'));
var initState = [
    {
        product: {
            id : 1,
        name : 'Iphone 11 Pro Max',
        image : 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 5
        },
        quanlity : 5
    }
];

const cart = (state = initState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default : return [...state];
    }
}

export default cart;