import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// Import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from 'swiper';
// Import testimonial data
import { testimonial } from '../data';

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const TestimonialSlider = () => {
  return (
    <Swiper
      className='testimonialSlider'
      navigation={true}
      autoplay={{ delay: 5000 }}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px]'>
              <div className='flex items-center gap-x-5 mb-9'>
                {/* avatar */}
                <img src={avatar} alt='' />
                <div>
                  <div className='text-xl font-semibold'>{name}</div>
                  <div className='text-gray-500'>{occupation}</div>
                </div>
              </div>
              {/* text */}
              <div className='text-xl max-w-[570px]'>{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

