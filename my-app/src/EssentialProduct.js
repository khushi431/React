import React from 'react';
import './Essential.css';
import EssentialProductList from './EssentialProductList';

const EssentialProduct = ({ data }) => {
    return (
        <header className="essential-header">
         <img 
                src={data.web_image} 
                alt={data.name} 
                className="header-image" 
            />
            <h1>{data.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
            
            {/* Subcategories Section */}
            <div className="subcategory-header">
                <h2>Explore Subcategories</h2>
            </div>
            <ul className="subcategory-list">
                {data.subcategoryList.map((subcategory) => (
                    <li key={subcategory.id}>
                        <a href={`/subcategories/${subcategory.slug}`}>
                            {subcategory.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Products Section */}
            <h2>Products</h2>
            <EssentialProductList products={data.products} />
            <p>Total Products: {data.productcount}</p>
        </header>
    );
};

export default EssentialProduct;



