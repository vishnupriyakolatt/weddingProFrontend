import React from 'react';
import { products } from '../data';

// import components
import ProductSlider from './ProductSlider';


const Products = () => {
  const { title, subtitle } = products;
  return(
    <div>
      <section className='section text-center'>
      <div className='container mx-auto'>
        <div>
          <h2 className='title'>{title}</h2>
         
        </div>
        <ProductSlider />
      </div>
    </section>
    </div>
  );
};

export default Products;
