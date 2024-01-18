import './HFooterStyles.css'
import HFooterslider from './HSwiper';

function Footer () {
    
    return (
    <>
            <div className='h-bodybox16'>
            <div className='h-bodybox17'>
            <div className='h-titlebox'>
            <h1>Что думают о нас туристы?</h1>
            <button className='button-prev-slide'><img src='images/arrowl.png' alt='prev'></img></button>
            <button className='button-next-slide'><img src='images/arrowr.png' alt='next'></img></button>
            </div>   
            <HFooterslider></HFooterslider>         
            </div>
            </div>
        <div className='h-bodybox18'>
        <div className='h-footerline'></div>
            <div className='h-footercontent'>
            <div className='h-footerbox'>
            <div className='h-bodybox19'>
                <div className='h-logofooter'>
                <a href="/"><img src='images/logofooter.jpg' alt='logofooter'></img></a>
                </div>
                <p>Лучшая платформа для бронирования отелей в Узбекистане</p>
                <div className='h-fb'></div>
                <div className='h-insta'></div>
                <div className='h-tg'></div>
            </div>
            <div className='h-bodybox20'>
                <ul className='h-list'>
                    <li><a href="/">Регионы</a></li>
                    <li><a href="/">Города</a></li>
                    <li><a href="/">Районы</a></li>
                    <li><a href="/">Аэропорты</a></li>
                    <li><a href="/">Ориентиры</a></li>
                </ul>
            </div>
            <div className='h-bodybox21'>
                <ul className='h-list1'>
                    <li><a href="/">Отели</a></li>
                    <li><a href="/">Дома и апартаменты</a></li>
                    <li><a href="/">Апартаменты/квартиры</a></li>
                    <li><a href="/">Курортные отели</a></li>
                    <li><a href="/">Хостелы</a></li>
                    <li><a href="/">Гостевые дома</a></li>
                </ul>
            </div>
            <div className='h-bodybox22'>
                <ul className='h-list2'>
                    <li><a href="/">Уникальное жилье</a></li>
                    <li><a href="/">Отзывы</a></li>
                    <li><a href="/">Сообщество путешественников</a></li>
                    <li><a href="/">Сезонные спецпредложения</a></li>
                    <li><a href="/">Поиск автомобилей</a></li>
                    <li><a href="/">Управлять бронированиями</a></li>
                </ul>
            </div>
            </div>
            <div className='h-copyright'>
                <p>E-Mehmon © 2023. Все права защищены. </p>
            </div>
            </div>
        </div>
    </>
    )
}


export default Footer;