
import React, { useState } from 'react';
import getOptions from '../../../../../listaBase/getOptionsBase';

const TipoPagamento = (props) => {

    let index = props.index;
    props = props.props;

    const [tipoPagamento, setTipoPagamento] = useState("");
    const [tiposPagamento, setTiposPagamento] = useState("");
    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        getOptions(props, "tiposPagamento", setTiposPagamento);
        if(props.editarObj) {
            
            props.objEnvio.adminCartao[index].tipoPagamento = props.editarObj.adminCartao[index].tipoPagamento;
            setTipoPagamento(props.editarObj.adminCartao[index].tipoPagamento);
        }
    }

    const changeTipoPagamento = (e) => {

        setTipoPagamento(e.target.value);
        //props.objEnvio.tipoPagamento = e.target.value;
        props.objEnvio.adminCartao[index].tipoPagamento = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="fornecedor">Tipo Pagamento</label>
            <select id="fornecedor" className="form-control" value={tipoPagamento} onChange={changeTipoPagamento}>
                <option>Escolha um Tipo de Pagamento</option>
                {tiposPagamento}
            </select>
        </div>
    );
}

export default TipoPagamento;