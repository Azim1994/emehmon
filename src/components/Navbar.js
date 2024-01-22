import './NavbarStyles.css';
import 'semantic-ui-css/semantic.min.css'
import { FaChevronDown } from "react-icons/fa";


function Navbar () {
   

        const items=[
            {name:"Найти жилье",path:'/findplace'},
            {name:"Куда сходить?",path:'/whereto'},
            {name:"Туры",path:'/tours'},
            {name:"Транспорт",path:'/transport'}
                    ]

        return(
            <>
            <nav className='NavbarItems'>
                <div className='navbar-logo'>
                <a href="/"><img className='logo-header' src="images/logoheader.png" alt="logoheader" /></a>
                </div>
                <ul className='nav-menu'>
                {items.map((nav)=>(
                    <li><a href={nav.path}>{nav.name}</a></li>
                    ))}
                </ul>
                <ul className='nav-menu1'>
                    <button className='btn1'>
                        <div className='wrapper1'><a href="/">USD</a>
                        <FaChevronDown color='white' size={13}
                        style={{paddingLeft: "4px", paddingTop: "3px"}}/></div>
                    </button>
                    <button className='btn2'>
                        <div className='wrapper2'><a href="/">Русский </a>
                        <FaChevronDown color='white' size={13}
                        style={{paddingLeft: "8px", paddingTop: "3px"}}/></div>
                    </button>
                    <button className='btn3'>
                        <img src='images/loginlogo.png' alt='signinlogo' className='imgsignin'></img> 
                        <div className='wrapper3'><a href="/">Войти</a></div>
                    </button>
                </ul>
            </nav>
            </>
        )
    }


export default Navbar;