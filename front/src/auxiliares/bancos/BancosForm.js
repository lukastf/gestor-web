


import React, { useState } from 'react';

import Bancos from './Bancos';
import enviarFormBase from '../../listaBase/enviarFormBase';

function BancosForm (props) {

    props = props.props;

    const voltar = () => {

        props.editarObj = false;

        props.setUrl("/bancos");
        props.setRoute(<Bancos props={props}/>);
    }

    const [_id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [idOrg, setIdOrg] = useState("");

    const [enviarResultado, setEnviarResultado] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);

        if(props.editarObj) { 
            
            setId(props.editarObj._id);
            setNome(props.editarObj.nome);
            setIdOrg(props.editarObj.idOrg);
        }
    }

    const changeNome = (e) => {

        setNome(e.target.value);
    }

    const changeIdOrg = (e) => {

        setIdOrg(e.target.value);
    }

    const enviarForm = (e) => {
        e.preventDefault();

        props.objEnvio = {
            _id: _id,
            nome: nome,
            idOrg: idOrg
        }

        enviarFormBase(props, "bancos", setEnviarResultado);
    }

    return (
        <div className="container-fluid p-4 col-12 col-md-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    Novo Banco
                </h3>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="nome">Nome do Banco</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        placeholder="" 
                        value={nome}
                        onChange={changeNome}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="idOrg">Id Org</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="idOrg" 
                        placeholder="" 
                        value={idOrg}
                        onChange={changeIdOrg}
                    />
                </div>
                <div className="text-center">

                    <button type="button" className="btn btn-light mr-3" onClick={voltar}>Voltar</button>
                    <button type="submit" className="btn btn-primary ml-3" onClick={enviarForm}> Salvar </button>

                    {enviarResultado}
                </div>
            </form>
        </div>
    );
}

export default BancosForm;