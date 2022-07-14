
import React, { useState } from 'react';

import Tecnologias from './Tecnologias';
import enviarFormBase from '../../listaBase/enviarFormBase';
import Fornecedor from './form/Fornecedor';
import TipoDocumento from './form/TipoDocumento';
import TipoOperacao from './form/TipoOperacao';
import DataInicio from './form/DataInicio';
import Valor from './form/Valor';
import Frequencia from './form/Frequencia';
import Observacao from './form/Observacao';

const TecnologiasForm = (props) => {

    props = props.props;

    const voltar = () => {

        props.editarObj = false;

        props.setUrl("/tecnologias");
        props.setRoute(<Tecnologias props={props}/>);
    }
    
    const [enviarResultado, setEnviarResultado] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) props.objEnvio = props.editarObj;
    }

    const enviarForm = (e) => {
        e.preventDefault();

        enviarFormBase(props, "tecnologias", setEnviarResultado);
    }

    return (
        <div className="container-fluid p-4 col-12 col-md-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    Nova Tecnologia
                </h3>
            </div>
            <form>
                <Fornecedor props={props}/>
                <TipoDocumento props={props}/>
                <TipoOperacao props={props}/>
                <DataInicio props={props}/>
                <Valor props={props}/>
                <Frequencia props={props}/>
                <Observacao props={props}/>

                <div className="text-center">

                    <button type="button" className="btn btn-light mr-3" onClick={voltar}>Voltar</button>
                    <button type="submit" className="btn btn-primary ml-3" onClick={enviarForm}> Salvar </button>

                    {enviarResultado}
                </div>
            </form>
        </div>
    );
}

export default TecnologiasForm;