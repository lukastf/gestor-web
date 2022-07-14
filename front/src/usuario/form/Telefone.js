
import React, { useState } from 'react';

const Telefone = (props) => {

    props = props.props;

    const [telefone, setTelefone] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setTelefone(props.editarObj.telefone);
    }

    const changeTelefone = (e) => {

        setTelefone(e.target.value);
        props.objEnvio.telefone = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input 
                type="text" 
                className="form-control" 
                id="telefone" 
                placeholder="" 
                value={telefone}
                onChange={changeTelefone}
            />
        </div>
    );
}

export default Telefone;