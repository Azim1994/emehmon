import { Component } from 'react';
import './hNavbarStyles.css';
import 'semantic-ui-css/semantic.min.css'
import { FaChevronDown } from "react-icons/fa";


class Navbar extends Component{
    render(){
        return(
            <div className='hnavbarbox'>
            <nav className='hNavbarItems'>
                <div className='hnavbar-logo'>
                <a href="/"><img className='hlogo-header' src="images/logofooter.jpg" alt="logoheader" /></a>
                </div>
                <ul className='hnav-menu'>
                    <li><a href="/">Найти желье</a></li>
                    <li><a href="/">Куда сходить?</a></li>
                    <li><a href="/">Туры</a></li>
                    <li><a href="/">Транспорт</a></li>
                </ul>
                <ul className='hnav-menu1'>
                    <button className='hbtn1'>
                        <div className='hwrapper1'><a href="/">USD</a>
                        <FaChevronDown color='white' size={13}
                        style={{paddingLeft: "4px", paddingTop: "3px"}}/></div>
                    </button>
                    <button className='hbtn2'>
                        <div className='hwrapper2'><a href="/">Русский </a>
                        <FaChevronDown color='white' size={13}
                        style={{paddingLeft: "8px", paddingTop: "3px"}}/></div>
                    </button>
                    <div className='hbtn3'>
                        <img src='images/loginlogo.png' alt='signinlogo' className='imgsignin'></img> 
                        <button className='hsignin'><a href="/">Войти</a></button>
                    </div>
                </ul>
            </nav>
            </div>
        )
    }
}

export default Navbar;