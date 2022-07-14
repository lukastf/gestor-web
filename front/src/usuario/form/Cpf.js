
import React, { useState } from 'react';

const Cpf = (props) => {

    props = props.props;

    const [cpf, setCpf] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setTelefone(props.editarObj.telefone);
    }

    const changeCpf = (e) => {

        setCpf(e.target.value);
    }

    return(
        <div className="form-group">
            <label htmlFor="cpf">Cpf</label>
            <input 
                type="text" 
                className="form-control" 
                id="cpf" 
                placeholder="" 
                value={cpf}
                onChange={changeCpf}
            />
        </div>
    );
}

export default Cpf;