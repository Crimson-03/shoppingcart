import React from "react";
import Product from "../product/product";
const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "SoyaBean",
        imgURL: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41s5Oe7vU3L._SX300_SY300_QL70_FMwebp_.jpg",
        price: 45
    },
    {
        id: 2,
        name: "Rice Basmati",
        imgURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61SvqojMkSL._SL1000_.jpg",
        price: 90
    },
    {
        id: 3,
        name: "Dettol",
        imgURL: "https://www.jiomart.com/images/product/600x600/491107791/dettol-original-soap-125-g-buy-4-get-1-free-product-images-o491107791-p491107791-0-202203170914.jpg",
        price: 17
    },
    {
        id: 4,
        name: "Salt",
        imgURL: "https://www.jiomart.com/images/product/600x600/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-0-202206021938.jpg",
        price: 25
    },
    {
        id: 5,
        name: "Vim Lemon Dishwash",
        imgURL: "https://www.jiomart.com/images/product/600x600/490346029/vim-lemon-dishwash-bar-200-g-pack-of-3-product-images-o490346029-p490346029-0-202203152252.jpg",
        price: 55
    },
    {
        id: 6,
        name: "Salt",
        imgURL: "https://www.jiomart.com/images/product/600x600/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-0-202206021938.jpg",
        price: 25
    },
    {
        id: 7,
        name: "Maggie",
        imgURL: "https://www.jiomart.com/images/product/600x600/490009127/maggi-2-minute-masala-instant-noodles-420-g-product-images-o490009127-p490009127-0-202203142033.jpg",
        price: 76
    },
    {
        id: 8,
        name: "Amul Butter",
        imgURL: "https://www.jiomart.com/images/product/600x600/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-0-202203170403.jpg",
        price: 50
    },
    {
        id: 9,
        name: "Amul Plain Cheese",
        imgURL: "https://www.jiomart.com/images/product/600x600/490001407/amul-yummy-plain-cheese-spread-200-g-container-product-images-o490001407-p490001407-3-202206101257.jpg",
        price: 89
    }
];
const Products = () => {
    return (
        <div>
            <ul className="products-container">
                {DUMMY_PRODUCTS.map((product, index) => (
                    <li key={index}>
                        <Product
                            id={product.id}
                            name={product.name}
                            imgURL={product.imgURL}
                            price={product.price}
                    />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;