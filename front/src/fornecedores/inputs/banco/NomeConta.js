
import React, { useState } from 'react';

const NomeConta = (props) => {

    props = props.props;

    const [nomeConta, setNomeConta] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.nomeConta = props.editarObj.nomeConta;
            setNomeConta(props.editarObj.nomeConta);
        }
    }

    const changeNomeConta = e => {

        setNomeConta(e.target.value);
        props.objEnvio.nomeConta = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="nomeConta">Nome Conta</label>
            <input 
                id="nomeConta"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={nomeConta} 
                onChange={changeNomeConta} 
            />
        </div>
    );
}

export default NomeConta;