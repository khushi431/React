import React from 'react';
import './Essential.css';

const EssentialProductList = ({ products }) => {
    return (
        <ul className="product-list">
            {products.map((product) => (
                <li key={product.id} className="product-item">
                    <img 
                        src={product.display_image} 
                        alt={product.name} 
                        className="product-image" 
                    />
                    <h3>{product.name}</h3>
                    <p>Size: {product.size}</p>
                    <p className="mrp-price">MRP: ₹{product.mrp_price}</p>
                    <p className="customer-price">Customer Price: ₹{product.customer_price}</p>
                    <p className="rating">Rating: {product.rating} ⭐</p>
                    {product.is_sold ? <p className="sold-out">Sold Out</p> : <p>In Stock</p>}  
                </li>
            ))}
        </ul>
    );
};

export default EssentialProductList;




