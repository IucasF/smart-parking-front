import estacionamentosMock from '../mock/estacionamentos.json'
import estacionamentoMock from '../mock/estacionamento.json'
import { IEstacionamento } from './interfaces';

function getEstacionamentos() :IEstacionamento[] {
    return estacionamentosMock.data;
}

function getEstacionamentoByID(id:string|undefined){
    return estacionamentoMock;
}

export {getEstacionamentos, getEstacionamentoByID}