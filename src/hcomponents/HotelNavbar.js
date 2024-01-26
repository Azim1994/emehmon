import './HotelNavbarStyles.css';
import 'semantic-ui-css/semantic.min.css'


function HotelNavbar () {

        const items=[
            {name:"Найти жилье",path:'/findplace'},
            {name:"Куда сходить?",path:'/whereto'},
            {name:"Туры",path:'/tours'},
            {name:"Транспорт",path:'/transport'}
]

        return(
            <>
            <div className='hnavbarbox'>
            <div className='hnavbar'>
            <div className='hlogo-header'>
            <a href="/"><img className='logo-header' src="images/logofooter.jpg" alt="logoheader" /></a>
            </div>
            <ul className='hnav-menu1'>
                {items.map((nav)=>(
                    <li><a href={nav.path}>{nav.name}</a></li>
                    ))}
                </ul>
            <div className='hnav-menu2'>
                <div className='currency'>
                <select id="currencies">
                <option value="USD">USD</option>
                <option value="UZS">UZS</option>
                <option value="RUB">RUB</option>
                </select>
                </div>
                <div className='language'>
                <select id="languages">
                <option value="Русский">Русский</option>
                <option value="Английский">Английский</option>
                <option value="Узбекский">Узбекский</option>
                </select>
                </div>
                <div className='h-btn3'>
                    <img src='images/loginlogo.png' alt='signinlogo'></img> 
                    <button className='h-login'>Войти</button>
                </div>
            </div>    
            </div>
            </div>
            </>
        )
    }

export default HotelNavbar;