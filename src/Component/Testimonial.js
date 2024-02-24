import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { testimonial } from '../data';

SwiperCore.use([Autoplay, Navigation]);

const TestimonialSlider = () => {
  return (
    <Swiper
      className='testimonialSlider'
      navigation={true}
      autoplay={{ delay: 5000 }} // Adjust delay as needed
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px]'>
              <div className='flex items-center gap-x-5 mb-9'>
                <img src={avatar} alt='' /> {/* Assuming avatar is the URL */}
                <div>
                  <div className='text-xl font-semibold'>{name}</div>
                  <div className='text-gray-500'>{occupation}</div>
                </div>
              </div>
              <div className='text-xl max-w-[570px]'>{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
