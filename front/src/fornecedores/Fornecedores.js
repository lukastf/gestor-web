

import React from 'react';

import FornecedorForm from './FornecedorForm';
import ListaBase from '../listaBase/ListaBase';

const Fornecedores = (props) => {

    props = props.props;

    props.titulo = "Fornecedores";
    props.tituloBtnNovo = "Fornecedor";
    props.url = "/fornecedores";
    props.titulosColunas = ["Nome Fantasia", "Cnpj", "Consultor", "Data/Hora Ultima Atualização"];
    props.excluirColuna = [
        "_id" , 
        "tipoPessoa", 
        "razaoSocial", 
        "cpf", 
        "inscricaoEstadual",
        "rg",
        "telefone", 
        "celular", 
        "contato", 
        "email", 
        "cep", 
        "tipoEndereco", 
        "logradouro", 
        "numero", 
        "complemento", 
        "bairro", 
        "estado", 
        "cidade", 
        "banco", 
        "numeroAgencia",
        "numeroConta",
        "nomeConta", 
        "tipoConta", 
        "numeroAgencia",
        "numeroConta", 
        "tipoConta", 
        "cnpjOuCpf",
        "cnpjOuCpfConta",
        "valorDoc",
        "taxaCred",  
        "observacao", 
        "numeroLogico",
        "origem", 
        "dataCadastro",
        "agencia",
        "sairSite",
        "diaPagamento",
        "fax"
    ];

    props.setRouteForm = (props) => {

        props.setRoute(<FornecedorForm props={props}/>);
    }

    props.filtros = ["pesquisar"];

    return (
        <ListaBase props={props} />
    );
}

export default Fornecedores;