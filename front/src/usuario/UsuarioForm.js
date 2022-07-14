
import React, { useState } from 'react';
import Usuarios from './Usuarios';
import enviarFormBase from '../listaBase/enviarFormBase';
import Nome from './form/Nome';
import Email from './form/Email';
import Senha from './form/Senha';
import Telefone from './form/Telefone';
import CepInicial from './form/CepInicial';
import CepFinal from './form/CepFinal';
import TipoUsuario from './form/TipoUsuario';
import Status from './form/Status';
import IdOrg from './form/IdOrg';

function UsuarioForm (props) {

    props = props.props;

    const voltar = () => {

        props.editarObj = false;

        props.setUrl("/usuarios");
        props.setRoute(<Usuarios props={props}/>);
    }

    const [enviarResultado, setEnviarResultado] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) props.objEnvio = props.editarObj;
    }

    const enviarForm = (e) => {
        e.preventDefault();

        //console.log(props);
        //return;

        enviarFormBase(props, "usuarios", setEnviarResultado);
    }

    return (
        <div className="container-fluid p-4 col-12 col-md-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    Novo Usuário
                </h3>
            </div>
            <form>
                <Nome props={props}/>
                <Email props={props}/>
                <Senha props={props}/>
                <Telefone props={props}/>
                <CepInicial props={props}/>
                <CepFinal props={props}/>
                <TipoUsuario props={props}/>
                <Status props={props}/>
                <IdOrg props={props}/>
                <div className="text-center">

                    <button type="button" className="btn btn-light mr-3" 
                    onClick={voltar}>Voltar</button>

                    <button type="submit" className="btn btn-primary ml-3" onClick={enviarForm}> Salvar </button>

                    {enviarResultado}
                </div>
            </form>
        </div>
    );
}

export default UsuarioForm;