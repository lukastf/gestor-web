

import React from 'react';

import UsuarioForm from './UsuarioForm';
import ListaBase from '../listaBase/ListaBase';

const Usuarios = (props) => {

    props = props.props;

    props.titulo = "Usuários";
    props.tituloBtnNovo = "Usuário";
    props.url = "/usuarios";
    props.titulosColunas = ["Nome", "E-mail", "Tipo", "Status", "Data Modificação"];
    props.excluirColuna = ["_id" , "telefone", "cpf", "cepInicial", "cepFinal", "idOrg", "dataCadastro"];

    props.setRouteForm = (props) => {
        props.setRoute(<UsuarioForm props={props}/>);
    }

    props.filtros = ["pesquisar"];

    return (
        <ListaBase props={props} />
    );
}

export default Usuarios;