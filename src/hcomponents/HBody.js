import HBodyslider from './HBSwiper';
import './HBodyStyles.css';
import { FaChevronRight } from "react-icons/fa";

function HBody () {    


    const hotels = [
        { title: 'Hotel Neptun Tashkent Pool&Spa1', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh1.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa2', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh2.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa3', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh3.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa4', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh4.png' }
    ]

    const feedbacks = [
        { name: 'Азиза Муминова', Image: '/images/ava1.png', feedback: 'Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.' },
        { name: 'Максим Персидский', Image: '/images/ava2.png', feedback: 'Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.' },
        // { name: 'Лариса Гузеева', Image: '/images/ava1.png', feedback: 'Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.' },
        // { name: 'Азиза Муминова', Image: '/images/ava1.png', feedback: 'Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.' },
        // { name: 'Максим Персидский', Image: '/images/ava2.png', feedback: 'Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.' },
        // { name: 'Лариса Гузеева', Image: '/images/ava1.png', feedback: 'Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.' }
    ];

    const lists1=[
        {name:"Роскошные номера",Image:'/images/icon1.png'},
        {name:"Изысканные рестораны",Image:'/images/icon2.png'},
        {name:"Элегантные бары",Image:'/images/icon3.png'},
        {name:"Спа-центр",Image:'/images/icon4.png'},
    ]
    
    const lists2=[
        {name:"Превосходные бассейны",Image:'/images/icon5.png'},
        {name:"Техника высшего класса",Image:'/images/icon6.png'},
        {name:"Качественная мебель",Image:'/images/icon7.png'},
        {name:"Обслуживание на уровне",Image:'/images/icon8.png'},
    ]
    
    const lists3=[
            {name:"Элегантные бары",Image:'/images/icon3.png'},
            {name:"Спа-центр",Image:'/images/icon4.png'},
            {name:"Роскошные номера",Image:'/images/icon1.png'},
            {name:"Превосходные бассейны",Image:'/images/icon5.png'}
    ]

    return (
    <>
        
        <div className='hheader-box'>

        <div className='navtab'>

        </div>

        <div className='body-title'>

        </div>

        <div className='address'>

        </div>

        <div className='lightbox'>

        </div>

        <div className='form-box'>

        </div>

        <div className='map'>

        </div>

        <div className='tab-bar'>

        </div>    
        
        <div className='description'>
            <h1>Описание отеля</h1>
            <p>Ощутите роскошь в ее лучших проявлениях, остановившись в нашем потрясающем четырехспальном отеле в Ташкенте. Расположенный в самом сердце города, наш отель предоставляет уникальную возможность насладиться комфортом и роскошью.
            Стильные номера с кондиционером оборудованы прекрасной террасой, частным бассейном и захватывающими видами, предоставляя проживающим незабываемый опыт.
        </p>
        <div className='wrap-it'>Этот элегантный отель идеально подходит для групп, стремящихся к выдающемуся уровню роскоши и полного расслабления. Вас ждет простор и уединение в нашем отеле в Ташкенте, обеспечивающем высший уровень сервиса читать далее</div>
            <div className='description-border'></div>
        </div>

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

        <div className='feedback'>
            <div className='feedback-title'>
            <h1>Отзывы посетилетей</h1>
            <button className='all-feedback'>Все отзывы <div className='arrowr'><FaChevronRight color='#3B71FE' size={13}/></div></button>
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

        </div>
        
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

        <div className='h-bodybox12'>
            <img src='images/body3.png' alt='body3'></img>
            <div className='h-bodybox13'>
                <h1>Добро пожаловать в нашу семью арендодателей!</h1>
                <p>Присоединяйтесь к нашей платформе и делайте свое жилье доступным для туристов. Создайте сотрудничество как 
в Airbnb и начните приключение без слов, станьте частью нашей гостеприимной семьи.</p>
                <button className='h-join'><a href="/">Присоединиться</a></button>
            </div>
        </div>       
        <div className='h-bodybox14'>
            <h1>Сезонные предложения</h1>
            <button className='h-back-btn'><img src='images/prev.png' alt='prev'></img></button>
            <button className='h-next-btn'><img src='images/next.png' alt='next'></img></button> 
            <HBodyslider></HBodyslider>
        </div>
    </>
    )
}

export default HBody;