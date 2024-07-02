import estacionamentosMock from '../mock/estacionamentos.json'
import estacionamentoMock from '../mock/estacionamento.json'
import vagasMock from '../mock/vagas.json'
import { IEstacionamento, IVagas } from './interfaces';

function getEstacionamentos() :IEstacionamento[] {
    return estacionamentosMock;
}

function getEstacionamentoByID(id:string|undefined) :IEstacionamento{
    return estacionamentoMock[0];
}

function getVagasByID(id:string|undefined) :IVagas{
  return vagasMock;
}

export {getEstacionamentos, getEstacionamentoByID, getVagasByID}