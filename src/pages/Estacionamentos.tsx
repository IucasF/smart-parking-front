import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IEstacionamento } from '../componnents/interfaces'
import Header from '../componnents/header';
import { getEstacionamentos } from '../componnents/Service'

import '../css/Estacionamentos.css'
import '../css/App.css'

function Estacionamentos() {
    const navigate = useNavigate();
    const [estacionamentos, setEstacionamentos] = useState<IEstacionamento[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getEstacionamentos();
                setEstacionamentos(data);
            } catch (err) {
                setError('Erro ao obter estacionamentos');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>
                    <Header />
                    <div className='mensagemTela'>Carregando...</div>
                </div>;
    }

    if (error) {
        return <div>
                    <Header />
                    <div className='mensagemTela'>{error}</div>
            </div>
    }

    return (
        <div>
            <Header />
            <div className='intro-heading'>
                <div className='header-title'>Estacionamentos</div>
            </div>
            <div className='container'>
                <div>
                    {(
                        estacionamentos?.map((item, index) => (
                            <div className="cardEstacionamento" key={index} onClick={() => navigate('/estacionamento/' + item.id)}>
                                <div className="nomeEstacionamento">
                                    {item?.desc}
                                </div>
                                <div className="vagas_totais">
                                    Vagas: {item?.total_vagas.toString()}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div><button onClick={() => navigate('/')} className='home-button'>Voltar</button></div>
        </div>
    );
}

export default Estacionamentos;