import "./BodyStyles.css";
import "./BodySwiper";
import Bodyslider from "./BodySwiper";
import React from "react";

function Body() {
  // window.onload=function(){
  // let scrollContainer = document.querySelector('.gallery');
  // let backBtn = document.getElementById("backBtn");
  // let nextBtn = document.getElementById("nextBtn");

  // scrollContainer.addEventListener('wheel', (e) => {
  //     e.preventDefault();
  //     scrollContainer.scrollLeft += e.deltaY;
  //     scrollContainer.style.scrollBehavior = 'auto';
  // });

  // nextBtn.addEventListener('click', () => {
  //     scrollContainer.style.scrollBehavior = 'smooth';
  //     scrollContainer.scrollLeft += 1200;
  // });

  // backBtn.addEventListener('click', () => {
  //     scrollContainer.style.scrollBehavior = 'smooth';
  //     scrollContainer.scrollLeft -= 1200;
  // });}
  // bodybox11 map
  const datas = [
    {
      title: "Hotel Neptun Tashkent Pool&Spa1",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh1.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa2",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh2.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa3",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh3.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa4",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh4.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa5",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh5.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa6",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh6.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa7",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh1.svg",
    },
    {
      title: "Hotel Neptun Tashkent Pool&Spa8",
      description: "8 ул. Лянгар, Ташкент",
      value: "от $120",
      Image: "/images/bodyh2.svg",
    },
  ];

  // bodybox4 map
  const steps = [
    {
      number: "01",
      headline: "Регистрация",
      paragraph:
        "Зарегистрируйтесь на нашем сайте, чтобы начать путешествие. Укажите свое имя, адрес электронной почты и пароль, чтобы создать учетную запись.",
    },
    {
      number: "02",
      headline: "Выбор отели и даты",
      paragraph:
        "Выберите желаемое место проживания и укажите даты вашего пребывания. Просматривайте доступные варианты и добавляйте их в корзину.",
    },
    {
      number: "03",
      headline: "Бронирование и оплата",
      paragraph:
        "Перейдите к корзине, где вы сможете проверить и подтвердить ваш выбор. Затем выберите удобный способ оплаты и завершите бронирование. Готово, ваше путешествие официально начато!",
    },
  ];

  return (
    <>
      {/* bodybox1 start */}
      <div className="bodybox1">
        <div className="bodybox2">
          <h1>Простые 3 шага для вашего идеального путешествия</h1>
          <p>Упростите свои планы для путешествия - с нами это легко!</p>
        </div>
        <div className="bodybox3">
          <div className="bodybox4">
            <div className="body1">
              <img src="images/body1.svg" alt="body1"></img>
            </div>
            <div className="aziza">
              <img src="images/aziza.svg" className="avatar1" alt="aziza"></img>
              <h4>Азиза Муминова</h4>
              <div className="stars1">
                <img src="images/stars1.svg" alt="stars1"></img>
              </div>
            </div>
            <div className="andrey">
              <img
                src="images/andrey.svg"
                className="avatar1"
                alt="andrey"
              ></img>
              <h4>Андрей Туйгунов</h4>
              <div className="stars1">
                <img src="images/stars1.svg" alt="stars1"></img>
              </div>
            </div>
            <div className="body2">
              <img src="images/body2.svg" alt="body2"></img>
            </div>
          </div>
          <div className="bodybox5">
            {steps.map((step) => (
              <div className="bodybox6">
                <div className="number">{step.number}</div>
                <h3>{step.headline}</h3>
                <p>{step.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bodybox9 start */}
      <div className="bodybox9">
        <div className="bodybox10">
          <h1>Дома, которые нравятся гостям</h1>
          <p>Упростите свои планы для путешествия - с нами это легко!</p>
        </div>
        <div className="bodybox11">
          <div className="grid">
            {datas.map((card) => (
              <div className="card1">
                <div className="cardimage">
                  <img src={card.Image} alt="bodyh1"></img>
                </div>
                <div className="cardbar1">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className="cardbar2">
                  <a href="/">
                    <button className="reserve">Забронировать</button>
                  </a>
                  <h2>{card.value}</h2>
                  <h4>/ночь</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bodybox12 start */}
      <div className="bodybox12">
        <img src="images/body3.svg" alt="body3"></img>
        <div className="bodybox13">
          <h1>Добро пожаловать в нашу семью арендодателей!</h1>
          <p>
            Присоединяйтесь к нашей платформе и делайте свое жилье доступным для
            туристов. Создайте сотрудничество как в Airbnb и начните приключение
            без слов, станьте частью нашей гостеприимной семьи.
          </p>
          <button className="join">
            <a href="/">Присоединиться</a>
          </button>
        </div>
      </div>
      {/* bodybox14 slider start */}
      <div className="bodybox14">
        <h1>Сезонные предложения</h1>
        <button className="back-btn" id="backBtn">
          <img src="images/prev.svg" alt="prev"></img>
        </button>
        <button className="next-btn" id="nextBtn">
          <img src="images/next.svg" alt="next"></img>
        </button>
        <Bodyslider></Bodyslider>
      </div>
    </>
  );
}

export default Body;
