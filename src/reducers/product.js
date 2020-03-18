var initState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : '',
        description : 'Sản phẩm do apple sản xuất',
        price : 500,
        inventory : 10
    },
    {
        id : 2,
        name : 'Iphone 8 Plus',
        image : '',
        description : 'Sản phẩm do apple sản xuất',
        price : 1500,
        inventory : 10
    },
    {
        id : 3,
        name : 'Iphone 9 Plus',
        image : '',
        description : 'Sản phẩm do apple sản xuất',
        price : 2500,
        inventory : 10
    },
    {
        id : 4,
        name : 'Iphone 11 Plus',
        image : '',
        description : 'Sản phẩm do apple sản xuất',
        price : 3500,
        inventory : 10
    },
    {
        id : 5,
        name : 'Iphone 12 Plus',
        image : '',
        description : 'Sản phẩm do apple sản xuất',
        price : 4500,
        inventory : 10
    }
];

const product = (state = initState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default product;