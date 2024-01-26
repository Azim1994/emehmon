import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './HeaderSwiperStyles.css'


export default function Headerslider() {

    const carousels = [
        { name: 'Hotel Neptun Tashkent Pool&Spa', price: 'от $120', Image: '/images/header1.png', address: '8 ул. Лянгар, Ташкент' }, 
        { name: 'Hotel Neptun Tashkent Pool&Spa', price: 'от $120', Image: '/images/header2.png', address: '8 ул. Лянгар, Ташкент' },
        { name: 'Hotel Neptun Tashkent Pool&Spa', price: 'от $120', Image: '/images/header3.png', address: '8 ул. Лянгар, Ташкент' }, 
    ]


  return (
    <>   
        <Swiper 
        slidesPerView={2} 
        spaceBetween={-280}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
        >
              <div className='carousel'>
              {carousels.map((item)=>(
                <SwiperSlide>
                        <div className='item'>
                          <img src={item.Image} alt="" />
                          <div className='text-box'>
                            <div className='text-box1'>
                            <h3>{item.name}</h3>
                            <h2>{item.price}</h2>
                            <p>{item.address}</p>
                            </div>
                          </div>
                        </div>
                </SwiperSlide>
                ))}
              </div>
              ...
            </Swiper>
    </>
  );
};