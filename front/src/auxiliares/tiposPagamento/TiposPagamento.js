
import React from 'react';

import ListaBase from '../../listaBase/ListaBase';
import TiposPagamentoForm from './TiposPagamentoForm';

const TiposPagamento = (props) => {

    props = props.props;

    props.titulo = "Tipos de Pagamento";
    props.tituloBtnNovo = "Tipo de Pagamento";
    props.url = "/tiposPagamento";
    props.titulosColunas = ["Nome do Tipo", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<TiposPagamentoForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default TiposPagamento;