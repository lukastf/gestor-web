
import React from 'react';

import ListaBase from '../../listaBase/ListaBase';
import TiposDocumentoForm from './TiposDocumentoForm';

const TiposDocumento = (props) => {

    props = props.props;

    props.titulo = "Tipos de Documento";
    props.tituloBtnNovo = "Tipo de Documento";
    props.url = "/tiposDocumento";
    props.titulosColunas = ["Nome", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<TiposDocumentoForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default TiposDocumento;