
import React from 'react';
//import OrdemDeServico from './btnsLogado/OrdemDeServico';
//import OrdemDeVisita from './btnsLogado/OrdemDeVisita';
import FornecedorNav from './btnsLogado/FornecedorNav';
import UsuarioNav from './btnsLogado/UsuarioNav';
import Auxiliares from './btnsLogado/Auxiliares';
import Conta from './btnsLogado/Conta';

const usuarioLogado = (props) => {

    const checkUsuario = () => {

        if (props.usuario.tipoUsuario === "Administrador" || props.usuario.tipoUsuario === "Administrador Master")
        return <UsuarioNav props={props}/>
        return "";
    }

    return(
    <ul className="navbar-nav">
        
        {/*<OrdemDeServico props={props} />
        <OrdemDeVisita props={props}/>*/}
        <FornecedorNav props={props}/>
        {checkUsuario()}
        <Auxiliares props={props}/>
        <Conta props={props}/>
    </ul>
    );
}

export default usuarioLogado;