import './HNavbarStyles.css';
import 'semantic-ui-css/semantic.min.css'
import { FaChevronDown } from "react-icons/fa";


function HNavbar () {

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
                    <button className='hbtn1'><p>USD</p>
                    <FaChevronDown color='#232E40' size={13}/></button>
                </div>
                <div className='language'>
                    <button className='hbtn2'><p>Русский</p> 
                    <FaChevronDown color='#232E40' size={13}/></button>
                </div>
                <button className='login'>Войти</button>
            </div>    

            </div>
            </div>
            </>
        )
    }

export default HNavbar;