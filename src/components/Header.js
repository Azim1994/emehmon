import './HeaderStyles.css'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './Images'

function Header() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
      /*console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);*/
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []); 

    
        const tabs= document.querySelectorAll('.tab-btn');
        // const all_content= document.querySelectorAll('.field-holder');
  
        tabs.forEach((tab, index)=>{
          tab.addEventListener('click', (e)=>{
            tabs.forEach(tab=>{tab.classList.remove('active')});
            tab.classList.add('active');
  
            var line=document.querySelector('.line');
          line.style.width = e.target.offsetWidth + "px";
          line.style.left = e.target.offsetLeft + "px";
          })
        });

    return (<>
      <div className='header'>
        <div className='header-box'>
          <div className='header-box1'>
          <h1>Собирай чемодан, остальное мы возьмем на себя</h1>
          </div>
          <div className='header-box2'>
          <div className='header-box3'>
          <p>Добро пожаловать на наш уникальный портал, который предоставляет полный спектр услуг для туристов в Узбекистане! </p>
          </div>
          <div className='header-box4'>
          <button className='show'><a href="Hotels">Все отели</a></button>
          <button className='showvideo'><a href="/">Посмотреть видео</a></button>
          <img src='images/play.png' className='playimage' alt="headerimg"></img>
          </div>
          </div>
        </div>
        <div className='header-box5'>
          <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
              <motion.div
               drag='x'
               dragConstraints={{ right: 0, left: -width }}
               className='inner-carousel'
               >
                  {images.map((image) => {
                      return(
                        <motion.div className='item' key={image}>
                          <img src={image} alt="" />
                          <div className='text-box'>
                            <div className='text-box1'>
                            <h3>Hotel Neptun Tashkent Pool&Spa</h3>
                            <h2>от $120</h2>
                            <p>8 ул. Лянгар, Ташкент</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                  })}
              </motion.div>
          </motion.div>
        </div>
            <div className='header-box6'>
                  <div className='tab-box'>
                    <button className='tab-btn active'>Отели</button>
                    <button className='tab-btn'>Туры</button>
                    <button className='tab-btn'>Авиабилеты</button>
                    <button className='tab-btn'>Транспорт</button>
                    <div className='line'></div>
                  </div>
                  <div className='content-box'>
                    <form className='form-inline'>
                    <div className='field-holder1 active'>
                      <input type='text' id='name' className='input-field' required></input>
                      <div className='icon'>
                        <img src='images/location.png' alt='location'></img>
                      </div>
                      <label for="name">Куда хотите поехать?</label>
                    </div>
                    <div className='field-holder'>                      
                      <input type='text' id='date' required></input>
                      <div className='icon'>
                        <img src='images/calendar.png' alt='calendar'></img>
                      </div>
                      <label for="name">Заезд</label>
                    </div>
                    <div className='field-holder'>                        
                      <input type='text' id='date' required></input>
                      <div className='icon'>
                        <img src='images/calendar.png' alt='calendar'></img>
                        </div>
                      <label for="name">Выезд</label>
                    </div>
                    <div className='field-holder'>                      
                      <input type='text' id='text' required></input>
                      <div className='icon'>
                        <img src='images/user.png' alt='user'></img>
                      </div>
                      <label for="name">Кол-во гостей</label>
                    </div>                      
                      <button className='search'><a href="/">Начать поиск</a></button>
                      <img src='images/search.png' alt='user' className='search1'></img>
                    </form>
                  </div>
            </div>
      </div>
      </>
    );
  }
  
  export default Header;