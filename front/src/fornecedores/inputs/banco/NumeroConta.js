import React, { useState } from 'react';
import { numberMask } from '../../../listaBase/masks';

const NumeroConta = (props) => {

    props = props.props;

    const [numeroConta, setNumeroConta] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.numeroConta = props.editarObj.numeroConta;
            setNumeroConta(props.editarObj.numeroConta);
        }
    }

    const changeNumeroConta = e => {

        let val = numberMask(e.target.value);

        setNumeroConta(val);
        props.objEnvio.numeroConta = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="numeroConta">Numero Conta</label>
            <input 
                id="numeroConta"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={numeroConta} 
                onChange={changeNumeroConta} 
            />
        </div>
    );
}

export default NumeroConta;