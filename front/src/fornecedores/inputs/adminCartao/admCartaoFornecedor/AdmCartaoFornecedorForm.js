
import React, { useState } from 'react';

import AdmCartaoFornecedor from './AdmCartaoFornecedor';
import enviarFormBase from '../../listaBase/enviarFormBase';
import getOptions from '../../listaBase/getOptionsBase';
import Fornecedor from './form/Fornecedor';
import TipoCartao from './form/TipoCartao';
import TaxaAdministrativa from './form/TaxaAdministrativa';
import VerTaxa from './form/VerTaxa';
import VerTipoCartao from './form/VerTipoCartao';
import TipoPagamento from './form/TipoPagamento';

const TecnologiasForm = (props) => {

    props = props.props;

    const voltar = () => {

        props.editarObj = false;

        props.setUrl("/admCartaoFornecedor");
        props.setRoute(<AdmCartaoFornecedor props={props}/>);
    }

    //const [_id, setId] = useState("");
    const [enviarResultado, setEnviarResultado] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        //setId(props.editarObj._id);
        if(props.editarObj) props.objEnvio = props.editarObj;
    }

    

    const enviarForm = (e) => {

        e.preventDefault();

        //props.objEnvio._id = _id;
        /*props.objEnvio = {
            _id: _id,
            fornecedor: fornecedor,
            tipoCartao: tipoCartao,
            taxaAdm: taxaAdm,
            verTaxa: verTaxa,
            verTipoCartao: verTipoCartao,
            tipoPagamento: tipoPagamento
        }*/

        enviarFormBase(props, "admCartaoFornecedor", setEnviarResultado);
    }

    return (
        <div className="container-fluid p-4 col-12 col-md-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    Nova Administração de Cartão
                </h3>
            </div>
            <form>
                <Fornecedor props={props}/>
                <TipoCartao props={props}/>
                <TaxaAdministrativa props={props}/>
                <VerTaxa props={props}/>
                <VerTipoCartao props={props}/>
                <TipoPagamento props={props}/>

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