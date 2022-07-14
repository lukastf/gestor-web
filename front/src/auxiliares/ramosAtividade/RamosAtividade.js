
import React from 'react';

import RamosAtividadeForm from './RamosAtividadeForm';
import ListaBase from '../../listaBase/ListaBase';

const RamosAtividade = (props) => {

    props = props.props;

    props.titulo = "Ramos de Atividade";
    props.tituloBtnNovo = "Ramo de Atividade";
    props.url = "/ramosAtividade";
    props.titulosColunas = ["Nome do Ramo", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<RamosAtividadeForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default RamosAtividade;