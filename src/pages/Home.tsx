import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import logoUnicamp from '../images/unicampPreto.png'
import Header from '../componnents/header'

import '../css/Home.css'
import '../css/App.css'

function Home(){
    const navigate = useNavigate();
    return(
    <div>
        <Header/>
        <body>
            <div className='intro-heading'>
                <img src = {logoUnicamp} alt="logoUnicamp" className='logo-Unicamp'  />
                <div className='header-title'>Smart Parking - Unicamp</div>
            </div>
            <div className='home-buttons'>
                <div><button onClick={() => navigate('estacionamentos')} className='home-button'>Estacionamentos</button></div>
                <div><button onClick={() => navigate('mais-informacoes')} className='home-button'>Mais informações</button></div>
            </div>
        </body>
    </div>
    );
}

export default Home;