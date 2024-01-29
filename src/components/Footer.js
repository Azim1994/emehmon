import "./FooterStyles.css";
import Footerslider from "./Swiper";

function Footer() {
  // footer list1 map data
  const items = [
    { name: "Регионы", path: "/regions" },
    { name: "Города", path: "/cities" },
    { name: "Районы", path: "/districts" },
    { name: "Аэропорты", path: "/aeroports" },
    { name: "Ориентиры", path: "/guides" },
  ];
  // footer list2 map data
  const lists = [
    { name: "Отели", path: "/hotels" },
    { name: "Дома и апартаменты", path: "/housesapp" },
    { name: "Апартаменты/квартиры", path: "/appartments" },
    { name: "Курортные отели", path: "/relaxhot" },
    { name: "Хостелы", path: "/hostels" },
    { name: "Гостевые дома", path: "/guesthouses" },
  ];
  // footer list3 map data
  const lis = [
    { name: "Уникальное жилье", path: "/uniqueplaces" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Сообщество путешественников", path: "/travelersclub" },
    { name: "Сезонные спецпредложения", path: "/seasonhot" },
    { name: "Поиск автомобилей", path: "/carsearch" },
    { name: "Управлять бронированиями", path: "/reservations" },
  ];

  return (
    <>
      <div className="bodybox16">
        <div className="bodybox17">
          <div className="titlebox">
            <h1>Что думают о нас туристы?</h1>
            <button className="button-prev-slide">
              <img src="images/arrow-left.svg" alt="prev"></img>
            </button>
            <button className="button-next-slide">
              <img src="images/arrow-right.svg" alt="next"></img>
            </button>
          </div>
          <Footerslider></Footerslider>
        </div>
      </div>
      <div className="bodybox18">
        <div className="footerline"></div>
        <div className="footercontent">
          <div className="footerbox">
            <div className="bodybox19">
              <div className="logofooter">
                <div className="logo">
                  <a href="/">
                    <img src="images/logofooter.svg" alt="logo"></img>
                  </a>
                </div>
              </div>
              <p>Лучшая платформа для бронирования отелей в Узбекистане</p>
              <div className="fb"></div>
              <div className="insta"></div>
              <div className="tg"></div>
            </div>
            <div className="bodybox20">
              <ul className="list">
                {items.map((val) => (
                  <li>
                    <a href={val.path}>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bodybox21">
              <ul className="list1">
                {lists.map((val) => (
                  <li>
                    <a href={val.path}>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bodybox22">
              <ul className="list2">
                {lis.map((val) => (
                  <li>
                    <a href={val.path}>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright">
              <p>E-Mehmon © 2023. Все права защищены. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
