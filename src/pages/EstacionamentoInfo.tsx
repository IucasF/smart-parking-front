import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { IEstacionamento, IVagas } from '../componnents/interfaces'
import Header from '../componnents/header'
import { getEstacionamentoByID, getVagasByID } from '../componnents/Service'
import carro1 from '../images/carro1.png'
import carro2 from '../images/carro2.png'
import carro3 from '../images/carro3.png'
import carro4 from '../images/carro4.png'
import carro5 from '../images/carro5.png'
import carro6 from '../images/carro6.png'
import carro7 from '../images/carro7.png'
import carro8 from '../images/carro8.png'
import carro9 from '../images/carro9.png'
import vaga_vazia from '../images/Vaga_Vazia.jpg'

import '../css/EstacionamentoInfo.css'
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

function EstacionamentoInfo(){
    const navigate = useNavigate();
    const params = useParams();
    const [estacionamento, setEstacionamento] = useState<IEstacionamento>(getEstacionamentoByID(useParams().id));
    const [vagas, setVagas] = useState<IVagas>(getVagasByID(useParams().id));
    const [listaDeCarros, setListaDeCarros] = useState<any>(ListadeCarros());

    function ListadeCarros(){
        var temp = [];
        for (let i = 0; i < vagas.vagas_ocupadas; i++) {
            var t = Math.floor(Math.random() * 10);
            if(t == 0){
                var carro = carro1;
            } else if (t==1){
                var carro = carro1;
            }else if (t==2){
                var carro = carro2;
            }else if (t==3){
                var carro = carro3;
            }else if (t==4){
                var carro = carro4;
            }else if (t==5){
                var carro = carro5;
            }else if (t==6){
                var carro = carro6;
            }else if (t==7){
                var carro = carro7;
            }else if (t==8){
                var carro = carro8;
            }else{
                var carro = carro9;
            }
            temp.push(carro)
        }
        for (let i = 0; i < (estacionamento.total_vagas - vagas.vagas_ocupadas); i++) {
            temp.push(vaga_vazia);
        }
        return(temp);
    }

    // setEstacionamentos(getEstacionamentos());
    return(
    <div>
        <Header/>
        <body>
            <div className='intro-heading'>
                {/* <img src = {logoUnicamp} alt="logoUnicamp" className='logo-Unicamp'  /> */}
                <div className='header-title'>{estacionamento.desc}</div>
            </div>
            <div className='containerInfo'>
                <div className='estacionamentoInfo'>
                    <div className='infoText'><b>Nome:</b> {estacionamento.desc}</div>
                    <div className='infoText'><b>Id: </b>{estacionamento.id}</div>
                    <div className='infoText'><b>Última atualização: </b>{new Date(vagas.timestamp_local_coleta).toLocaleString()}</div>
                    <div className='infoText'>
                        <div className='vagasEstacionamentoInfo'><b>Vagas: </b></div>
                        <div className={GetStatusColor(vagas?.vagas_ocupadas,estacionamento?.total_vagas)}> {vagas?.vagas_ocupadas}/{estacionamento?.total_vagas}</div>
                    </div>         
                </div>
                <div className='estacionamentoImagem'>
                    {(
                        listaDeCarros?.map((item:string, index:number) => (
                        <div className='vagas' key={index}>
                            <img src={item} alt='' className='imagemEstacionamento'></img>
                        </div>
                        ))
                    )}
                </div>
            </div>
        {/* {estacionamentoMock.data[1].Nome} */}
            <div><button onClick={() => navigate('/estacionamentos')} className='home-button'>Voltar</button></div>
        </body>
    </div>
    );
}

export default EstacionamentoInfo;