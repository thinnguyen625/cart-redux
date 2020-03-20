var initState = [
    {
        id : 1,
        name : 'Iphone 11 Pro Max',
        image : 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 5
    },
    {
        id : 2,
        name : 'Apple Watch',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/9/14/636725444086534194_MU662VNA%201.png',
        description : 'Sản phẩm do VSmart sản xuất',
        price : 1500,
        inventory : 10,
        rating : 4

    },
    {
        id : 3,
        name : 'Macbook Pro 2020',
        image : 'https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 2500,
        inventory : 10,
        rating : 5

    },
    {
        id : 4,
        name : 'Samsung A71',
        image : 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/642093882.jpeg',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 3500,
        inventory : 10,
        rating : 4

    },
    {
        id : 5,
        name : 'Mi Band 4',
        image : 'https://cdn.tgdd.vn/Products/Images/7077/202980/mi-band-4-6-600x600.jpg',
        description : 'Sản phẩm do Xiaomi sản xuất',
        price : 4500,
        inventory : 10,
        rating : 3

    }
];

const products = (state = initState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;