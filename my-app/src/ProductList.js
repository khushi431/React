import React, { useState, useEffect } from 'react';
import Product from './Products';
import productsData from './data/Products.json';  // Import JSON file

function ProductList() {
  const [products, setProducts] = useState([]);

  // Load data from the JSON file
  useEffect(() => {
    setProducts(productsData.data);  // Assuming the JSON structure is { data: [...] }
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div  className="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <Product 
            key={product.id} 
            name={product.name} 
            size={product.size}
            mrp={product.mrp_price}
            price={product.customer_price}
            image={product.display_image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

