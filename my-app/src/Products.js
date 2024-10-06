// import React from 'react';
// // import Description from './Description';
// import Price from './Price';
// import './ProductList.css'
// // import Image from './Image';  // Import the new ProductImage component

// // function Product({ name, size, oldPrice, newPrice, image }) 

// function Product({ name, size, mrp, price, image }) {
//   return (
//     <div style={{ border: '1px solid #ddd', padding: '10px', width: '250px' }}>
//       <img 
//       src={image} 
//       alt={name} 
//       style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//     />
//       {/* <Image src={image} alt={name} /> */}
//       <h2>{name}</h2>
//       <p><strong>Size:</strong> {size}</p>
//        {/* <p>{description}</p>; */}
//       <p style={{ textDecoration: 'line-through', color: '#888' }}> {`MRP: ₹${mrp}`} </p> 
//       {/* <Price oldPrice={oldPrice} newPrice={newPrice} /> */}
//       <Price price={`Discounted Price: ₹${price}`} />
//     </div>
//   );
// }

// export default Product;


import React from 'react';
import Price from './Price';
import './ProductList.css';  // Ensure the CSS is imported

function Product({ name, size, mrp, price, image }) {
  return (
    <div className="product"> {/* Use class "product" for the product container */}
      <img 
        src={image} 
        alt={name} 
        className="product-img" /* Use class "product-img" for the product image */
      />
      <h2 className="product-name">{name}</h2> {/* Use class "product-name" for the product name */}
      <p className="product-size"><strong>Size:</strong> {size}</p> {/* Use class "product-size" */}
      <p className="mrp-price">MRP: ₹{mrp}</p> {/* Use class "mrp-price" for the MRP price */}
      <Price price={`Discounted Price: ₹${price}`} /> {/* Use the Price component */}
    </div>
  );
}

export default Product;


