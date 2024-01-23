import HBodyslider from './HBSwiper';
import './HBodyStyles.css';
import { FaChevronRight } from "react-icons/fa";

function HBody () {    

                                // bodybox9 map list
    const hotels = [
        { title: 'Hotel Neptun Tashkent Pool&Spa1', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh1.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa2', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh2.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa3', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh3.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa4', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh4.png' }
    ]
                            // feedback box map
    const feedbacks = [
        { name: 'Азиза Муминова', Image: '/images/ava1.png', feedback: 'Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.' },
        { name: 'Максим Персидский', Image: '/images/ava2.png', feedback: 'Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.' },
        // { name: 'Лариса Гузеева', Image: '/images/ava1.png', feedback: 'Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.' },
        // { name: 'Азиза Муминова', Image: '/images/ava1.png', feedback: 'Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.' },
        // { name: 'Максим Персидский', Image: '/images/ava2.png', feedback: 'Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.' },
        // { name: 'Лариса Гузеева', Image: '/images/ava1.png', feedback: 'Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.' }
    ];
                            // comfort box list1 map
    const lists1=[
        {name:"Роскошные номера",Image:'/images/icon1.png'},
        {name:"Изысканные рестораны",Image:'/images/icon2.png'},
        {name:"Элегантные бары",Image:'/images/icon3.png'},
        {name:"Спа-центр",Image:'/images/icon4.png'},
    ]
                            // comfort box list2 map
    const lists2=[
        {name:"Превосходные бассейны",Image:'/images/icon5.png'},
        {name:"Техника высшего класса",Image:'/images/icon6.png'},
        {name:"Качественная мебель",Image:'/images/icon7.png'},
        {name:"Обслуживание на уровне",Image:'/images/icon8.png'},
    ]
                            // comfort box list3 
    const lists3=[
            {name:"Элегантные бары",Image:'/images/icon3.png'},
            {name:"Спа-центр",Image:'/images/icon4.png'},
            {name:"Роскошные номера",Image:'/images/icon1.png'},
            {name:"Превосходные бассейны",Image:'/images/icon5.png'}
    ]

//     const pictures=[
//         {Image:'/images/hgallery1.png'},
//         {Image:'/images/hgallery2.png'},
//         {Image:'/images/hgallery3.png'},
//         {Imag

    // const mainImg = document.getElementById('mainImg');
    // const thumb1 = document.getElementById('thumb1');
    // const thumb1Src = document.getElementById('thumb1').src;
    // const thumb2 = document.getElementById('thumb2');
    // const thumb2Src = document.getElementById('thumb2').src;

    // thumb1.addEventListener("click",function(){
    //     mainImg.src=thumb1Src
    // })

    // thumb2.addEventListener("click",function(){
    //     mainImg.src=thumb2Src
    // })

    return (
    <>
        
        <div className='hheader-box'>
                                {/* breadcrumb div start */}
        <div className='navtab'>
            <ul className='breadcrumb'>
                <li><a href='/'>Главная</a><img src='images/arrow-right.png' className='arrow-right' alt='arrow'></img></li>
                <li><a href='/'>Отели Ташкента</a><img src='images/arrow-right.png' className='arrow-right' alt='arrow'></img></li>
                <li><span aria-current="page" className='current-page'>Hotel Neptun Tashkent Pool&Spa</span></li>
            </ul>
        </div>
                                {/* breadcrumb div end */}
                                {/* title, address and 2 buttons div start */}
        <div className='body-title'>
            <h1>Hotel Neptun Tashkent Pool&Spa</h1>
            <button className='save'><img src='images/save.png' className='title-icons' alt='save'></img>Сохранить</button>
            <button className='share'><img src='images/share.png' className='title-icons' alt='share'></img>Поделиться</button>
        </div>

        <div className='address'>
        <img src='images/location.png' className='title-icons' alt='location'></img><p>8 ул. Лянгар, Ташкент</p>
        </div>
                                {/* title, address and 2 buttons div end */}
                                {/* gallery box div start */}
        <div className='gallery-box'>
            <div className='hgallery' onclick="changeImageOnClick(event)">
                <div className='image1'><img src='images/hgallery1.png' id='mainImg' alt='hgallery'></img></div>
                <div className='image2'><img src='images/hgallery2.png' id='thumb1' alt='hgallery'></img></div>
                <div className='image2'><img src='images/hgallery3.png' id='thumb2' alt='hgallery'></img></div>
                <div className='image4'><img src='images/hgallery4.png' alt='hgallery'></img>
                <button className='hgallery-btn'><img src='images/eye.png' 
                className='hgallery-icon' alt='location'></img><a href="/hotels">+25</a></button>
                </div>                
            </div>
        </div>
                                {/* gallery box div end */}
                                {/* form box div start */}
        <div className='side-box'>
            <div className='hotel'>
            <img src='images/hotel.png' className='hotel-icon' alt='hotel'></img><p>Meros Group</p>
            </div>
            <div className='rating'>
            <img src='images/rating.png' className='rating-icon' alt='rating'></img><p>(245 отзывов)</p>
            </div>
            <div className='hotel-price'>
                <p>от</p><h2>$120</h2> <p>/ночь</p>
            </div>
            <div className='mini-form'>
            <form className='form-box'>
                    <div className='field-date1 active'>                      
                      <input type='text' id='date' required></input>
                      <div className='icon'>
                        <img src='images/calendar.png' alt='calendar'></img>
                      </div>
                      <label for="name">Заезд</label>
                    </div>
                    <div className='field-date2'>                        
                      <input type='text' id='date' required></input>
                      <div className='icon'>
                        <img src='images/calendar.png' alt='calendar'></img>
                        </div>
                      <label for="name">Выезд</label>
                    </div>
                    <div className='field-h'>    
                      <label for="name">Количество гостей</label>                  
                      <input type='text' list="people" id='people' required>
                        {/* <datalist id="people">
                            <option value="2 взрослых"></option>
                            <option value="3 взрослых"></option>
                            <option value="4 взрослых"></option>
                        </datalist> */}
                      </input>
                      <div className='icon'>
                        <img src='images/user.png' alt='user'></img>
                      </div>
                    </div>
                      <button className='lookfor'><a href="/hotels">Просмотреть наличие мест</a></button>
                    </form>
            </div>
            <div className='actual'>
                <p>Цены актуальны до 24 ноября, 2023 года</p>
            </div>
        </div>
                                {/* form box div end */}
                                {/* map box div start */}
        <div className='map'>
            <button className='map-btn'><img src='images/eye.png' 
            className='map-icon' alt='location'></img><a href="/">Показать на карте</a></button>
        </div>
                                {/* map box div end */}
                                {/* tab bar and description box div start */}
        <div className='tab-bar'>
            <button className='tabbar-btn1 active'>Описание</button>
            <button className='tabbar-btn2'>Наличие мест</button>
            <button className='tabbar-btn3'>Что рядом?</button>
            <button className='tabbar-btn4'>Дополнительные услуги</button>
        </div>    
        
        <div className='description'>
            <h1>Описание отеля</h1>
            <p>Ощутите роскошь в ее лучших проявлениях, остановившись в нашем потрясающем четырехспальном отеле в Ташкенте. Расположенный в самом сердце города, наш отель предоставляет уникальную возможность насладиться комфортом и роскошью.
            Стильные номера с кондиционером оборудованы прекрасной террасой, частным бассейном и захватывающими видами, предоставляя проживающим незабываемый опыт.
        </p>
        <div className='wrap-it'>Этот элегантный отель идеально подходит для групп, стремящихся к выдающемуся уровню роскоши и полного расслабления. Вас ждет простор и уединение в нашем отеле в Ташкенте, обеспечивающем высший уровень сервиса <a href="/">читать далее</a></div>
            <div className='description-border'></div>
        </div>
                                {/* tab bar and description box div end */}
                                {/* comfort box div start */}
        <div className='comfort'>
            <div className='comfort-title'>
                <h1>Удобства отеля</h1>
                <p>Наш отель включает в себя уютные номера и общественные зоны для комфортного отдыха, а также:</p>
            </div>

            <div className='comfort-listbox'>
                <div className='listbox1'>
                    <ul className='c-list1'>
                    {lists1.map((list)=>(
                        <li><span className='dot'><img src={list.Image} className='list-icon' alt='icon'></img></span>{list.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='listbox2'>
                <ul className='c-list1'>
                {lists2.map((list)=>(
                        <li><span className='dot'><img src={list.Image} className='list-icon' alt='icon'></img></span>{list.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='listbox3'>
                <ul className='c-list1'>
                {lists3.map((list)=>(
                        <li><span className='dot'><img src={list.Image} className='list-icon' alt='icon'></img></span>{list.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='comfort-border'></div>
        </div>
                                {/* comfort box div end */}
                                {/* feedback box div start */}
        <div className='feedback'>
            <div className='feedback-title'>
            <h1>Отзывы посетилетей</h1>
            <button className='all-feedback'>Все отзывы <div className='arrowr'>
                <FaChevronRight color='#3B71FE' size={13}/></div></button>
            </div>
            <div className='feedback-box'>
            {feedbacks.map((feedback)=>(
            <div className='feedback-card'>
                    <span className='f-quote'><img src='images/quotes.png' alt='quote'></img></span>
                    <p>{feedback.feedback}</p>
                <div className='feedback-line'></div>
                <div className='feedback-detail'>
                    <div className='feed-avatar'><img src={feedback.Image} alt='avatar'></img></div>
                    <p>{feedback.name}</p>
                    <span className='feed-stars'><img src='images/stars1.png' alt='stars'></img></span>
                </div>    
                </div>
             ))}   
            </div>
            <div className='feedback-border'></div>
        </div>
                                {/* feedback box div end */}  
        </div>
                                {/* bodybox9 div start */}
            <div className='h-bodybox9'>
            <div className='h-bodybox10'>
            <h1>Похожие отели</h1>
            </div>
            <div className='h-bodybox11'>
                <div className='hgrid'>
                    {hotels.map((hotel)=>(
                    <div className='h-card1'>
                    <div className='h-cardimage'>
                        <img src={hotel.Image} alt='bodyh1'></img>
                    </div>
                    <div className='h-cardbar1'>
                    <h3>{hotel.title}</h3>
                    <p>{hotel.description}</p>
                    </div>
                    <div className='h-cardbar2'>
                        <button className='h-reserve'><a href="/">Забронировать</a></button>
                    <h2>{hotel.value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
                            {/* body box div end */}
                            {/* body box12 div start */}
        <div className='h-bodybox12'>
            <img src='images/body3.png' alt='body3'></img>
            <div className='h-bodybox13'>
                <h1>Добро пожаловать в нашу семью арендодателей!</h1>
                <p>Присоединяйтесь к нашей платформе и делайте свое жилье доступным для туристов. Создайте сотрудничество как 
в Airbnb и начните приключение без слов, станьте частью нашей гостеприимной семьи.</p>
                <button className='h-join'><a href="/">Присоединиться</a></button>
            </div>
        </div>
                            {/* body box12 div end */}
                            {/* slider div start */}
        <div className='h-bodybox14'>
            <h1>Сезонные предложения</h1>
            <button className='h-back-btn'><img src='images/prev.png' alt='prev'></img></button>
            <button className='h-next-btn'><img src='images/next.png' alt='next'></img></button> 
            <HBodyslider></HBodyslider>
        </div>
                            {/* slider div end */}
    </>
    )
}

export default HBody;