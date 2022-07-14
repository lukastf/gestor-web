
import React, { useState } from 'react';
import { numberMask } from '../../../listaBase/masks';

const NumeroAgencia = (props) => {

    props = props.props;

    const [numeroAgencia, setNumeroAgencia] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.agencia = props.editarObj.agencia;
            setNumeroAgencia(props.editarObj.agencia);
        }
    }

    const changeNumeroAgencia = e => {

        let val = numberMask(e.target.value);

        setNumeroAgencia(val);
        props.objEnvio.agencia = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="numeroAgencia">Numero Agência</label>
            <input 
                id="numeroAgencia"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={numeroAgencia} 
                onChange={changeNumeroAgencia} 
            />
        </div>
    );
}

export default NumeroAgencia;