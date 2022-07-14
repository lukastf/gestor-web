
import React from 'react';
import ListaBase from '../../listaBase/ListaBase';
import AdmCartaoFornecedorForm from './AdmCartaoFornecedorForm';

const AdmCartaoFornecedor = (props) => {

    props = props.props;

    props.titulo = "Administração Cartão do Fornecedor";
    props.tituloBtnNovo = "Tipo de Cartão/Taxa/Ciclo";
    props.url = "/admCartaoFornecedor";
    props.titulosColunas = ["Fornecedor", "Tipo de Cartão", "Taxa Administrativa", "Taxa Visivel", "Cartão Visivel", "Tipo de Pagamento"];
    props.excluirColuna = ["_id", "dataCadastro", "dataAtualizacao"];

    props.setRouteForm = (props) => {
        props.setRoute(<AdmCartaoFornecedorForm props={props}/>);
    }

    return (
        <ListaBase props={props} />
    );
}

export default AdmCartaoFornecedor;