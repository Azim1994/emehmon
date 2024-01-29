import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./SwiperStyles.css";

export default function Footerslider() {
  const infos = [
    {
      name: "Азиза Муминова",
      Image: "/images/ava1.svg",
      feedback:
        "Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.",
    },
    {
      name: "Максим Персидский",
      Image: "/images/ava2.svg",
      feedback:
        "Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.",
    },
    {
      name: "Лариса Гузеева",
      Image: "/images/ava1.svg",
      feedback:
        "Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.",
    },
    {
      name: "Азиза Муминова",
      Image: "/images/ava1.svg",
      feedback:
        "Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.",
    },
    {
      name: "Максим Персидский",
      Image: "/images/ava2.svg",
      feedback:
        "Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.",
    },
    {
      name: "Лариса Гузеева",
      Image: "/images/ava1.svg",
      feedback:
        "Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.",
    },
  ];

  return (
    <>
      <div className="reviewbox">
        <Swiper
          slidesPerView={2}
          spaceBetween={-176}
          // allowTouchMove={false}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
          modules={[Navigation]}
        >
          {infos.map((info) => (
            <SwiperSlide>
              <div className="fbcard">
                <span className="quote">
                  <img src="images/quote.svg" alt="quote"></img>
                </span>
                <p>{info.feedback}</p>
                <div className="fbcardline"></div>
                <div className="fbdetail">
                  <div className="avatar">
                    <img src={info.Image} alt="avatar"></img>
                  </div>
                  <p>{info.name}</p>
                  <span className="stars">
                    <img src="images/stars.svg" alt="stars"></img>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </>
  );
}
