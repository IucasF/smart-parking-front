import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import  headerBg from '../images/header-bg.jpg'
import logoUnicamp from '../images/unicampPreto.png'
import Header from '../componnents/header'

import '../css/MaisInformacoes.css'
import '../css/App.css'

function MaisInformacoes(){
    const navigate = useNavigate();
    return(
    <div>
        <Header/>
        <body>
            <div className='intro-heading'>
                <img src = {logoUnicamp} alt="logoUnicamp" className='logo-Unicamp'  />
                <div className='header-title'>Smart Parking - Unicamp</div>
            </div>
            <div className='main-text'>
            Este sistema é parte do projeto de conclusão de curso dos alunos André Gouvênia, Lucas Farias e Tiago Dall'Oca, sob a orientação da professora Juliana Borin. Seu objetivo é fornecer um exemplo de aplicação prática para o projeto de estacionamento inteligente, que integra o projeto Smart Campus da Unicamp. Através deste sistema, os usuários podem verificar em tempo real a disponibilidade de vagas em todos os estacionamentos conectados.
            </div>
            <div><button onClick={() => navigate('/')} className='home-button'>Voltar</button></div>
        </body>
    </div>
    );
}

export default MaisInformacoes;