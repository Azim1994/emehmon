import { Component } from 'react';
import './NavbarStyles.css';
import 'semantic-ui-css/semantic.min.css'
import { FaChevronDown } from "react-icons/fa";


class Navbar extends Component{
    render(){
        return(
            <nav className='NavbarItems'>
                <div className='navbar-logo'>
                    <img className='logo-header' src="images/logoheader.png" alt="logoheader" />
                </div>
                <ul className='nav-menu'>
                    <li><a href="/">Найти желье</a></li>
                    <li><a href="/">Куда сходить?</a></li>
                    <li><a href="/">Туры</a></li>
                    <li><a href="/">Транспорт</a></li>
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
        )
    }
}

export default Navbar;