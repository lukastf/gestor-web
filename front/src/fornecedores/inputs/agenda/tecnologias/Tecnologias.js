
import React from 'react';
import ListaBase from '../../listaBase/ListaBase';
import TecnologiasForm from './TecnologiasForm';

const Tecnologias = (props) => {

    props = props.props;

    props.titulo = "Tecnologias";
    props.tituloBtnNovo = "Tecnologia";
    props.url = "/tecnologias";
    props.titulosColunas = ["Fornecedor", "Tipo de Documento", "Tipo de Operação", "Data Inicio", "Valor", "Frequência"];
    props.excluirColuna = ["_id" , "observacao", "dataCad", "dataAtl"];

    props.setRouteForm = (props) => {
        props.setRoute(<TecnologiasForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default Tecnologias;