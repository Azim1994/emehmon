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
        { title: 'Hotel Neptun Tashkent Pool&Spa1', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh1.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa2', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh2.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa3', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh3.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa4', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh4.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa5', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh5.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa6', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh6.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa7', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh1.png' },
        { title: 'Hotel Neptun Tashkent Pool&Spa8', description: '8 ул. Лянгар, Ташкент', value:'от $120', Image: '/images/bodyh2.png' },
    ];
        
    const slide = [
        { name: 'Горы Кунгурбука', price: 'от $240', Image: '/images/sp1.png', Image2: ''}, 
        { name: 'От Пальтау до Бричмуллы', price: 'от $240', Image: '/images/sp2.png' },
        { name: 'Восхождение на вершину горы Сюрената', price: 'от $240', Image: '/images/sp3.png' }, 
        { name: 'Зааминский горно-арчовый заповедник', price: 'от $240', Image: '/images/sp4.png' },
        { name: 'Горы Кунгурбука', price: 'от $240', Image: '/images/sp5.png' },
        { name: 'От Пальтау до Бричмуллы', price: 'от $240', Image: '/images/sp6.png' },
        { name: 'Восхождение на вершину горы Сюрената', price: 'от $240', Image: '/images/sp7.png' },
        { name: 'Зааминский горно-арчовый заповедник', price: 'от $240', Image: '/images/sp8.png' },
    ]

    const steps = [
          {number: '01', headline: 'Регистрация', paragraph: 'Зарегистрируйтесь на нашем сайте, чтобы начать путешествие. Укажите свое имя, адрес электронной почты и пароль, чтобы создать учетную запись.' },
          {number: '02', headline: 'Выбор отели и даты', paragraph: 'Выберите желаемое место проживания и укажите даты вашего пребывания. Просматривайте доступные варианты и добавляйте их в корзину.' },
          {number: '03', headline: 'Бронирование и оплата', paragraph: 'Перейдите к корзине, где вы сможете проверить и подтвердить ваш выбор. Затем выберите удобный способ оплаты и завершите бронирование. Готово, ваше путешествие официально начато!' },
    ]
         
         
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
                    <div className='avatar'><img src='images/aziza.png' alt='aziza'></img></div>
                    <h4>Азиза Муминова</h4>
                    <div className='stars1'><img src='images/stars1.png' alt='stars1'></img></div>
                </div>
                <div className='andrey'>
                <div className='avatar'><img src='images/andrey.png' alt='andrey'></img></div>
                    <h4>Андрей Туйгунов</h4>
                    <div className='stars1'><img src='images/stars1.png' alt='stars1'></img></div>
                </div>
                <div className='body2'>
                    <img src='images/body2.png' alt='body2'></img>
                </div>
            </div>
            <div className='bodybox5'>
            {steps.map((step)=>(
                <div className='bodybox6'>
                <div className='number'>{step.number}</div>
                <h3>{step.headline}</h3>
                <p>{step.paragraph}</p>
                </div>
            ))}
            </div>
        </div>

        </div>
            <div className='bodybox9'>
            <div className='bodybox10'>
            <h1>Дома, которые нравятся гостям</h1>
            <p>Упростите свои планы для путешествия - с нами это легко!</p>
            </div>
            <div className='bodybox11'>
                <div className='grid'>
                {datas.map((card)=>(
                    <div className='card1'>
                    <div className='cardimage'>
                        <img src={card.Image} alt='bodyh1'></img>
                    </div> 
                    <div className='cardbar1'>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    </div> 
                    <div className='cardbar2'>
                        <button className='reserve'><a href="/">Забронировать</a></button>
                    <h2>{card.value}</h2><h4>/ночь</h4>
                    </div>
                    </div>
                    ))}
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
            {slide.map((slide)=>(        
            <div className='scard'>
            <div className='simg'>
                <span className='discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src={slide.Image} alt='sp1'></img>
            </div>
                <div className='sinfo'>
                <h4>{slide.name}</h4>
                <p>{slide.price}</p>
                </div>
            </div>
            ))}      
        </div>
        </div>
    </>
    )
}

export default Body;