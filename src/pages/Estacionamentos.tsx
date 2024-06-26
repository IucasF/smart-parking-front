import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { IEstacionamento } from '../componnents/interfaces'
import Header from '../componnents/header'
import { getEstacionamentos } from '../componnents/Service'

import '../css/Estacionamentos.css'
import '../css/App.css'

function GetStatusColor(vagasOcupadas: number, vagasTotais: number): string{
    var ocupacao = (vagasOcupadas/vagasTotais)*100;
    if (ocupacao > 75) {
        return "cheio"
    }
    else if (ocupacao < 25){
        return "vazio"
    }
    else{
        return "normal"
    }
}

function Estacionamentos(){
    const navigate = useNavigate();
    const [estacionamentos, setEstacionamentos] = useState<IEstacionamento[]>(getEstacionamentos());

    // setEstacionamentos(getEstacionamentos());

    return(
    <div>
        <Header/>
        <body>
            <div className='intro-heading'>
                {/* <img src = {logoUnicamp} alt="logoUnicamp" className='logo-Unicamp'  /> */}
                <div className='header-title'>Estacionamentos</div>
            </div>
            <div className='container'>
                <div>
                    {(
                        estacionamentos?.map((item, index) => (
                        <div className="cardEstacionamento" key={index} onClick={() => navigate('/estacionamento/' + item.Id)}>
                            <div className="nomeEstacionamento">
                            {item?.Nome}
                            </div>
                            <div className={GetStatusColor(item?.Vagas_ocupadas,item?.Vagas_totais)}>
                            {item?.Vagas_ocupadas.toString() + "/" + item?.Vagas_totais.toString()}
                            </div>
                        </div>
                        ))
                    )}
                </div>
            </div>
        {/* {estacionamentoMock.data[1].Nome} */}
            <div><button onClick={() => navigate('/')} className='home-button'>Voltar</button></div>
        </body>
    </div>
    );
}

export default Estacionamentos;