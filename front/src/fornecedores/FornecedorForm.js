
import React, { useState } from 'react';
import Fornecedores from './Fornecedores';

import Dados from './inputGroups/Dados';
import Contato from './inputGroups/Contato';
import Banco from './inputGroups/Banco';
import RamoDeAtividade from './inputGroups/RamoDeAtividade';
import AdminCartao from './inputGroups/AdminCartao';
import Agenda from './inputGroups/Agenda';
import NumeroLogico from './inputGroups/NumeroLogico';
import Endereco from './inputGroups/Endereco';

import enviarFormBase from '../listaBase/enviarFormBase';
//import FornecedorFormAdminCartao from './groups/FornecedorFormAdminCartao';
//import SelectConsultor from './SelectConsultor';

const FornecedorForm = (props) => {

    props = props.props;

    const voltar = () => {

        props.editarObj = false;

        props.setUrl("/fornecedores");
        props.setRoute(<Fornecedores props={props}/>);
    }

    const [enviarResultado, setEnviarResultado] = useState("");
    const [check, setCheck] = useState(false);

    
    //if (props.editarObj) props.objEnvio = props.editarObj;

    //console.log(props.editarObj)

    if(!check) {

        setCheck(true);
        if (props.editarObj) {

            props.objEnvio._id = props.editarObj._id;
            props.objEnvio.vendedor = props.usuario.idOrg;
        }
        
    }

    const enviarForm = (e) => {
        e.preventDefault();

        enviarFormBase(props, "fornecedores", setEnviarResultado);
    }

    return (
        <div className="container-fluid p-4 col-12 col-md-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    Novo Fornecedor
                </h3>
            </div>
            <form>
                <Dados props={props}/>
                <Contato props={props}/>
                <Banco props={props}/>
                <RamoDeAtividade props={props}/>
                <AdminCartao props={props}/>
                <Agenda props={props}/>
                <NumeroLogico props={props}/>
                <Endereco props={props}/>

                {/*<SelectConsultor props={props}/>*/}

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

export default FornecedorForm;