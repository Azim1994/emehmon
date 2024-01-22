import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './HBSwiperStyles.css'


export default function HBodyslider() {

    const slides = [
        { name: 'Горы Кунгурбука', price: 'от $240', Image: '/images/sp1.png' }, 
        { name: 'От Пальтау до Бричмуллы', price: 'от $240', Image: '/images/sp2.png' },
        { name: 'Восхождение на вершину горы Сюрената', price: 'от $240', Image: '/images/sp3.png' }, 
        { name: 'Зааминский горно-арчовый заповедник', price: 'от $240', Image: '/images/sp4.png' },
        { name: 'Горы Кунгурбука', price: 'от $240', Image: '/images/sp5.png' },
        { name: 'От Пальтау до Бричмуллы', price: 'от $240', Image: '/images/sp6.png' },
        { name: 'Восхождение на вершину горы Сюрената', price: 'от $240', Image: '/images/sp7.png' },
        { name: 'Зааминский горно-арчовый заповедник', price: 'от $240', Image: '/images/sp8.png' },
    ]

  return (
    <>
    <div className='h-gallery'>
    <Swiper 
    slidesPerView={4} 
    spaceBetween={24}
    // allowTouchMove={false}
    navigation={{
      prevEl: ".h-back-btn",
      nextEl: ".h-next-btn"      
    }}
    modules={[Navigation]}
    >
        {slides.map((slide)=>(
      <SwiperSlide>
      <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src={slide.Image} alt='sp1'></img>
            </div>
                <div className='h-sinfo'>
                <h4>{slide.name}</h4>
                <p>{slide.price}</p>
                </div>
            </div>
      </SwiperSlide>
      ))}
      ...
    </Swiper>
    </div>
    </>
  );
};