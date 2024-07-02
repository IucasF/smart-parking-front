type IEstacionamento = {
    id: string;
    desc: string;
    total_vagas: number;
}

type IVagas = {
    estacionamento_id: string;
    timestamp_ack_server: string;
    timestamp_local_coleta: string;
    vagas_ocupadas: number;
}

export type {IEstacionamento, IVagas}