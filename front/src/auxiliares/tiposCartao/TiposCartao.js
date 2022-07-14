
import React from 'react';

import ListaBase from '../../listaBase/ListaBase';
import TiposCartaoForm from './TiposCartaoForm';

const TiposCartao = (props) => {

    props = props.props;

    props.titulo = "Tipos de Cartão";
    props.tituloBtnNovo = "Tipo de Cartão";
    props.url = "/tiposCartao";
    props.titulosColunas = ["Nome", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<TiposCartaoForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default TiposCartao;