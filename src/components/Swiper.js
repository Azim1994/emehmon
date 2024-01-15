import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './SwiperStyles.css'

export default function Footerslider() {
  return (

    <div className='reviewbox'>
    <Swiper 
    slidesPerView={2} 
    spaceBetween={-160}
    navigation={{
      nextEl: "button-next-slide",
      prevEl: "button-prev-slide",
    }}
    modules={[Navigation]}
    >
      <SwiperSlide>
      <div className='fbcard'>
                    <span className='quote'><img src='images/quote.png' alt='quote'></img></span>
                    <p>Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.</p>
                <div className='fbcardline'></div>
                <div className='fbdetail'>
                    <div className='avatar'><img src='images/ava1.png' alt='avatar'></img></div>
                    <p>Азиза Муминова</p>
                    <span className='stars'><img src='images/stars.png' alt='stars'></img></span>
                </div>    
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='fbcard'>
                    <span className='quote'><img src='images/quote.png' alt='quote'></img></span>
                    <p>Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.</p>
                <div className='fbcardline'></div>
                <div className='fbdetail'>
                    <div className='avatar'><img src='images/ava2.png' alt='avatar'></img></div>
                    <p>Максим Персидский</p>
                    <span className='stars'><img src='images/stars.png' alt='stars'></img></span>
                </div>    
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='fbcard'>
                    <span className='quote'><img src='images/quote.png' alt='quote'></img></span>
                    <p>Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.</p>
                <div className='fbcardline'></div>
                <div className='fbdetail'>
                    <div className='avatar'><img src='images/ava1.png' alt='avatar'></img></div>
                    <p>Азиза Муминова</p>
                    <span className='stars'><img src='images/stars.png' alt='stars'></img></span>
                </div>    
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='fbcard'>
                    <span className='quote'><img src='images/quote.png' alt='quote'></img></span>
                    <p>Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.</p>
                <div className='fbcardline'></div>
                <div className='fbdetail'>
                    <div className='avatar'><img src='images/ava2.png' alt='avatar'></img></div>
                    <p>Максим Персидский</p>
                    <span className='stars'><img src='images/stars.png' alt='stars'></img></span>
                </div>    
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='fbcard'>
                    <span className='quote'><img src='images/quote.png' alt='quote'></img></span>
                    <p>Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.</p>
                <div className='fbcardline'></div>
                <div className='fbdetail'>
                    <div className='avatar'><img src='images/ava1.png' alt='avatar'></img></div>
                    <p>Азиза Муминова</p>
                    <span className='stars'><img src='images/stars.png' alt='stars'></img></span>
                </div>    
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='fbcard'>
                    <span className='quote'><img src='images/quote.png' alt='quote'></img></span>
                    <p>Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.</p>
                <div className='fbcardline'></div>
                <div className='fbdetail'>
                    <div className='avatar'><img src='images/ava2.png' alt='avatar'></img></div>
                    <p>Максим Персидский</p>
                    <span className='stars'><img src='images/stars.png' alt='stars'></img></span>
                </div>    
                </div>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};