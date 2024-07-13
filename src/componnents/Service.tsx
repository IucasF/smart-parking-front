import { IEstacionamento, IVagas } from './interfaces';

async function getEstacionamentos(): Promise<IEstacionamento[]> {
    const response = await fetch('http://localhost:3000/estacionamentos');
    if (!response.ok) {
        throw new Error('Erro ao obter estacionamentos.');
    }
    const data: IEstacionamento[] = await response.json();
    return data;
}

async function getEstacionamentoByID(id: string | undefined): Promise<IEstacionamento[]> {
    const response = await fetch(`http://localhost:3000/estacionamentos/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao obter estacionamento com ID ${id}.`);
    }
    const data: IEstacionamento[] = await response.json();
    return data;
}

async function getVagasByID(id: string | undefined): Promise<IVagas> {
    const response = await fetch(`http://localhost:3000/vagas/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao obter vagas para o estacionamento com ID ${id}.`);
    }
    const data: IVagas = await response.json();
    return data;
}

export { getEstacionamentos, getEstacionamentoByID, getVagasByID };