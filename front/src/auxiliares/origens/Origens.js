
import React from 'react';

import ListaBase from '../../listaBase/ListaBase';
import OrigensForm from './OrigensForm';

const Origens = (props) => {

    props = props.props;

    props.titulo = "Origens";
    props.tituloBtnNovo = "Origem";
    props.url = "/origens";
    props.titulosColunas = ["Nome", "IdOrg"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<OrigensForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default Origens;