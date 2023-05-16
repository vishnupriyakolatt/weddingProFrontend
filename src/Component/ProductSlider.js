import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
// import required modules
import { Navigation, Pagination } from 'swiper';
// import data
import { products } from '../data';
// import icons
import { HiPlus } from 'react-icons/hi';


const ProductSlider = () => {
  
  const { pages } = products;
  return (<div>
     <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='productSlider min-h-[1300px]'
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
              {page.productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;
                return (
                  <div
                    className='w-full max-w-[290px] h-[380px] text-left'
                    key={index}
                  >
                    <div className='border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition'>
                      <img src={image.type} alt='' />
                     
                    </div>
                    <div className='font-semibold lg:text-xl'>{name}</div>
                    <div className='flex items-center gap-x-3'>
                    
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>)
};

export default ProductSlider;
