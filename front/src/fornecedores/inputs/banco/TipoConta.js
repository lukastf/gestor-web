
import React, { useState } from 'react';

const TipoConta = (props) => {

    props = props.props;

    const [tipoConta, setTipoConta] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.tipoConta = props.editarObj.tipoConta;
            setTipoConta(props.editarObj.tipoConta);
        }
    }

    const changeTipoConta = e => {
        setTipoConta(e.target.value);
        props.objEnvio.tipoConta = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="tipoConta">Tipo de Conta</label>
            <select id="tipoConta" className="form-control" value={tipoConta} onChange={changeTipoConta}>
                <option>Escolha um tipo de conta</option>
                <option value="1">Conta Corrente</option>
                <option value="2">Conta Poupança</option>
            </select>
        </div>
    );
}

export default TipoConta;