
import React from 'react';

import ListaBase from '../../listaBase/ListaBase';
import TiposOperacaoForm from './TiposOperacaoForm';

const TiposOperacao = (props) => {

    props = props.props;

    props.titulo = "Tipos de Operação";
    props.tituloBtnNovo = "Tipo de Operação";
    props.url = "/tiposOperacao";
    props.titulosColunas = ["Nome do Tipo", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<TiposOperacaoForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default TiposOperacao;