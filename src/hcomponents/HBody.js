import './HBodyStyles.css';

function HBody () {    

    window.onload=function(){
    let scrollContainer = document.querySelector('.gallery');
    let backBtn = document.getElementById("h-back-Btn");
    let nextBtn = document.getElementById("h-next-Btn");

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
        
        <div className='hheader-box'>

        </div>
        
            <div className='h-bodybox9'>
            <div className='h-bodybox10'>
            <h1>Похожие отели</h1>
            </div>
            <div className='h-bodybox11'>
                    <div className='h-card1'>
                    <div className='h-cardimage'>
                        <img src='images/bodyh1.png' alt='bodyh1'></img>
                    </div>
                    <div className='h-cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='h-cardbar2'>
                        <button className='h-reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='h-card2'>
                <div className='h-cardimage'>
                        <img src='images/bodyh2.png' alt='bodyh1'></img>
                    </div>
                    <div className='h-cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='h-cardbar2'>
                        <button className='h-reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='h-card3'>
                <div className='h-cardimage'>
                        <img src='images/bodyh3.png' alt='bodyh1'></img>
                    </div>
                    <div className='h-cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='h-cardbar2'>
                        <button className='h-reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
                </div>
                <div className='h-card4'>
                <div className='h-cardimage'>
                        <img src='images/bodyh4.png' alt='bodyh1'></img>
                    </div>
                    <div className='h-cardbar1'>
                    <h3>{datas[0].title}</h3>
                    <p>{datas[0].description}</p>
                    </div>
                    <div className='h-cardbar2'>
                        <button className='h-reserve'><a href="/">Забронировать</a></button>
                    <h2>{datas[0].value}</h2><h4>/ночь</h4>
                    </div>
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
            <button className='back-btn' id="h-back-Btn"><img src='images/prev.png' alt='prev'></img></button>
            <button className='next-btn' id="h-next-Btn"><img src='images/next.png' alt='next'></img></button> 
            
        <div className='h-gallery'>         
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp1.png' alt='sp1'></img>
            </div>
                <div className='h-sinfo'>
                <h4>{datas[1].name}</h4>
                <p>{datas[1].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp2.png' alt='sp2'></img>
            </div>
                <div className='h-sinfo'>
                <h4>{datas[2].name}</h4>
                <p>{datas[2].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp3.png' alt='sp3'></img>  
            </div>
                <div className='h-sinfo'>
                <h4>{datas[3].name}</h4>
                <p>{datas[3].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp4.png' alt='sp4'></img>  
            </div>
                <div className='h-sinfo'>
                <h4>{datas[4].name}</h4>
                <p>{datas[4].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp5.png' alt='sp5'></img>
            </div>
                <div className='h-sinfo'>
                <h4>{datas[1].name}</h4>
                <p>{datas[1].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp6.png' alt='sp6'></img>
            </div>
                <div className='h-sinfo'>
                <h4>{datas[2].name}</h4>
                <p>{datas[2].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp7.png' alt='sp7'></img>  
            </div>
                <div className='h-sinfo'>
                <h4>{datas[3].name}</h4>
                <p>{datas[3].price}</p>
                </div>
            </div>
            <div className='h-scard'>
            <div className='h-simg'>
                <span className='h-discount'><img src='images/discount.png' alt='discount'></img></span>
                <img src='images/sp8.png' alt='sp8'></img>  
            </div>
                <div className='h-sinfo'>
                <h4>{datas[4].name}</h4>
                <p>{datas[4].price}</p>
                </div>
            </div>            
        </div>
        </div>
    </>
    )
}

export default HBody;