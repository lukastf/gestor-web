
import React, { useState } from 'react';
import { celularMask } from '../../../listaBase/masks';

const Telefone = (props) => {

    props = props.props;

    const [telefone, setTelefone] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.telefone = props.editarObj.telefone;
            setTelefone(props.editarObj.telefone);
        }
    }

    const changeTelefone = e => {

        let val = celularMask(e.target.value);

        setTelefone(val);
        props.objEnvio.telefone = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input 
                id="telefone"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={telefone} 
                onChange={changeTelefone} 
            />
        </div>
    );
}

export default Telefone;
