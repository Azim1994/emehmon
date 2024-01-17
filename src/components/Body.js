import './BodyStyles.css';

function Body () {    

    window.onload=function(){
    let scrollContainer = document.querySelector('.gallery');
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
        scrollContainer.style.scrollBehavior = 'auto';
    });

    nextBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft += 1200;
    });

    backBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft -= 1200;
    });}

    const datas = [
        { title: 'Hotel Neptun Tashkent Pool&Spa', description: '8 ул. Лянгар, Ташкент', value:'от $120' },
        { name: 'Горы Кунгурбука', price: 'от $240' }, 
        { name: 'От Пальтау до Бричмуллы', price: 'от $240' },
        { name: 'Восхождение на вершину горы Сюрената', price: 'от $240' }, 
        { name: 'Зааминский горно-арчовый заповедник', price: 'от $240' } 
    ];
 
    return (
    <>
        <div className='bodybox1'>
        <div className='bodybox2'>
            <h1>Простые 3 шага для вашего идеального путешествия</h1>
            <p>Упростите свои планы для путешествия - с нами это легко!</p>
        </div>
        <div className='bodybox3'>
            <div className='bodybox4'>
                <div className='body1'>
                    <img src='images/body1.png' alt='body1'></img>
                </div>
                <div className='aziza'>
                    <img src='images/aziza.png' alt='aziza'></img>
                </div>
                <div className='andrey'>
                    <img src='images/andrey.png' alt='andrey'></img>
                </div>
                <div className='body2'>
                    <img src='images/body2.png' alt='body2'></img>
                </div>
            </div>
            <div className='bodybox5'>
                <div className='bodybox6'>
                <div className='one'></div>
                <h3>Регистрация</h3>
                <p>Зарегистрируйтесь на нашем сайте, чтобы начать путешествие. Укажите свое имя, адрес электронной почты и пароль, чтобы создать учетную запись.</p>
                </div>
                <div className='bodybox7'>
                <div className='two'></div>
                <h3>Выбор отели и даты</h3>
                <p>Выберите желаемое место проживания и укажите даты вашего пребывания. Просматривайте доступные варианты и добавляйте их в корзину.</p>
                </div>
                <div className='bodybox8'>
                <div className='three'></div>
                <h3>Бронирование и оплата</h3>
                <p>Перейдите к корзине, где вы сможете проверить и подтвердить ваш выбор. Затем выберите удобный способ оплаты и завершите бронирование. Готово, ваше путешествие официально начато!</p>
                </div>
            </div>
        </div>
        </div>
            <div className='bodybox9'>
            <div className='bodybox10'>
            <h1>Дома, которые нравятся гостям</h1>
            <p>Упростите свои планы для путешествия - с нами это легко!</p>
            </div>
            <div className='bodybox11'>
                    <div className='card1'>
                    <div className='cardimage'>
                        <img src='images/bodyh1.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card2'>
                <div className='cardimage'>
                        <img src='images/bodyh2.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card3'>
                <div className='cardimage'>
                        <img src='images/bodyh3.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card4'>
                <div className='cardimage'>
                        <img src='images/bodyh4.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card5'>
                <div className='cardimage'>
                        <img src='images/bodyh5.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card6'>
                <div className='cardimage'>
                        <img src='images/bodyh6.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card7'>
                <div className='cardimage'>
                        <img src='images/bodyh1.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='card8'>
                <div className='cardimage'>
                        <img src='images/bodyh2.png' alt='bodyh1'></img>
                    </div>
                    <div className='cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='bodybox12'>
            <img src='images/body3.png' alt='body3'></img>
            <div className='bodybox13'>
                <h1>Добро пожаловать в нашу семью арендодателей!</h1>
                <p>Присоединяйтесь к нашей платформе и делайте свое жилье доступным для туристов. Создайте сотрудничество как 
в Airbnb и начните приключение без слов, станьте частью нашей гостеприимной семьи.</p>
                <button className='join'><a href="/">Присоединиться</a></button>
            </div>
        </div>       
        <div className='bodybox14'>
            <h1>Сезонные предложения</h1>
            <button className='back-btn' id="backBtn"><img src='images/prev.png' alt='prev'></img></button>
            <button className='next-btn' id="nextBtn"><img src='images/next.png' alt='next'></img></button> 
            
        <div className='gallery'>         
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp1.png' alt='sp1'></img>
            </div>
                <div className='sinfo'>
                <h4>{datas[1].name}</h4>
                <p>{datas[1].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp2.png' alt='sp2'></img>
            </div>
                <div className='sinfo'>
                <h4>{datas[2].name}</h4>
                <p>{datas[2].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp3.png' alt='sp3'></img>  
            </div>
                <div className='sinfo'>
                <h4>{datas[3].name}</h4>
                <p>{datas[3].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp4.png' alt='sp4'></img>  
            </div>
                <div className='sinfo'>
                <h4>{datas[4].name}</h4>
                <p>{datas[4].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp5.png' alt='sp5'></img>
            </div>
                <div className='sinfo'>
                <h4>{datas[1].name}</h4>
                <p>{datas[1].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp6.png' alt='sp6'></img>
            </div>
                <div className='sinfo'>
                <h4>{datas[2].name}</h4>
                <p>{datas[2].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp7.png' alt='sp7'></img>  
            </div>
                <div className='sinfo'>
                <h4>{datas[3].name}</h4>
                <p>{datas[3].price}</p>
                </div>
            </div>
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp8.png' alt='sp8'></img>  
            </div>
                <div className='sinfo'>
                <h4>{datas[4].name}</h4>
                <p>{datas[4].price}</p>
                </div>
            </div>            
        </div>
        </div>
    </>
    )
}

export default Body;