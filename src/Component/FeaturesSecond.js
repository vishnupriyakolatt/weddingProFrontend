import React from 'react';
import { features } from '../data';


const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;

  return (
    <div>
      <section className='section'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            {/* text */}
            <div className='flex-1 flex flex-col'>
              <h2 className='title font-third'>{title}</h2>
              <p className='subtitle font-third'>{subtitle}</p>
            </div>
            {/* image */}
            <div className='flex-1'>
            
                <img src={image.type} className='w-500 h-160' alt='' />
        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSecond;


