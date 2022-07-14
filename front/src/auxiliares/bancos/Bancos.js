
import React from 'react';

import BancosForm from './BancosForm';
import ListaBase from '../../listaBase/ListaBase';

const Bancos = (props) => {

    props = props.props;

    props.titulo = "Bancos";
    props.tituloBtnNovo = "Banco";
    props.url = "/bancos";
    props.titulosColunas = ["Nome do Banco", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<BancosForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default Bancos;