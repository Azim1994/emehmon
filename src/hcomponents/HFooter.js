import "./HFooterStyles.css";
import HFooterslider from "./HFSwiper";

function HFooter() {
  // list1 map data
  const items = [
    { name: "Регионы", path: "/regions" },
    { name: "Города", path: "/cities" },
    { name: "Районы", path: "/districts" },
    { name: "Аэропорты", path: "/aeroports" },
    { name: "Ориентиры", path: "/guides" },
  ];
  // list2 map data
  const lists = [
    { name: "Отели", path: "/hotels" },
    { name: "Дома и апартаменты", path: "/housesapp" },
    { name: "Апартаменты/квартиры", path: "/appartments" },
    { name: "Курортные отели", path: "/relaxhot" },
    { name: "Хостелы", path: "/hostels" },
    { name: "Гостевые дома", path: "/guesthouses" },
  ];
  // list3 map data
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
      <div className="h-bodybox16">
        <div className="h-bodybox17">
          <div className="h-titlebox">
            <h1>Что думают о нас туристы?</h1>
            <button className="button-prev-slide">
              <img src="images/arrow-left.svg" alt="prev"></img>
            </button>
            <button className="button-next-slide">
              <img src="images/arrow-right.svg" alt="next"></img>
            </button>
          </div>
          <HFooterslider></HFooterslider>
        </div>
      </div>
      <div className="h-bodybox18">
        <div className="h-footerline"></div>
        <div className="h-footercontent">
          <div className="h-footerbox">
            <div className="h-bodybox19">
              <div className="h-logofooter">
                <div className="h-logo">
                  <a href="/">
                    <img src="images/logofooter.svg" alt="logo"></img>
                  </a>
                </div>
              </div>
              <p>Лучшая платформа для бронирования отелей в Узбекистане</p>
              <div className="h-fb"></div>
              <div className="h-insta"></div>
              <div className="h-tg"></div>
            </div>
            <div className="h-bodybox20">
              <ul className="h-list">
                {items.map((val) => (
                  <li>
                    <a href={val.path}>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-bodybox21">
              <ul className="h-list1">
                {lists.map((val) => (
                  <li>
                    <a href={val.path}>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-bodybox22">
              <ul className="h-list2">
                {lis.map((val) => (
                  <li>
                    <a href={val.path}>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-copyright">
              <p>E-Mehmon © 2023. Все права защищены. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HFooter;
