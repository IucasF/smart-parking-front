import React from "react"
import  logoSmartCampus from '../images/smart-campus.png'
import '../css/Header.css'

function Header(){
    return(
        <header>
            <div className='first-logo'>
                <a href='https://smartcampus.prefeitura.unicamp.br/#page-top' target='_blank' rel='noopener noreferrer'> 
                    <img src = {logoSmartCampus} alt="logoSmartCampus" className='logo-SmartCampus'  />
                </a>
            </div>
        </header>
    )
}

export default Header;