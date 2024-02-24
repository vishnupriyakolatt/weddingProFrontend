import React from 'react';
import NewItemsSlider from '../Component/NewItemsSlider';
import logo from '../assets/logo.jpg';
import { newInStore } from '../data';

const NewItems = () => {
  const { title, subtitle } = newInStore;

  return (
    <div>
      <section className='section'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            {/* Logo and Text */}
            <div className='flex md:flex-col gap-x-6 mb-6 lg:mb-17 lg:-right-12'>
              <img src={logo} className='w-40 h-40 mx-auto' />
              <div className='flex-1 flex flex-col justify-end'>
                <h2 className='title font-third'>{title}</h2>
                <p className='subtitle text-3xl font-third'>{subtitle}</p>
              </div>
            </div>
            {/* Slider */}
            <div className='lg:max-w-[900px] xl:max-w-[900px] mr-auto'> {/* Add mr-auto class */}
              <NewItemsSlider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewItems;

