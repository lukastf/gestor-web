
import React, { useState } from 'react';
import getOptions from '../../../../../listaBase/getOptionsBase';

const TipoOperacao = (props) => {

    let index = props.index;
    props = props.props;

    const [tipoOperacao, setTipoOperacao] = useState("");
    const [tiposOperacao, setTiposOperacao] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        getOptions(props, "tiposOperacao", setTiposOperacao);
        if(props.editarObj) {
            
            props.objEnvio.agenda[index].tipoOperacao = props.editarObj.agenda[index].tipoOperacao;
            setTipoOperacao(props.editarObj.agenda[index].tipoOperacao);
        }
    }

    const changeTipoOperacao = (e) => {

        setTipoOperacao(e.target.value);
        props.objEnvio.agenda[index].tipoOperacao = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="tipoOp">Tipo Operação</label>
            <select id="tipoOp" className="form-control" value={tipoOperacao} onChange={changeTipoOperacao}>
                <option>Escolha um tipo de operação</option>
                {tiposOperacao}
            </select>
        </div>
    );
}

export default TipoOperacao;