import React, { useState } from 'react';

const Senha = (props) => {

    props = props.props;

    const [senha, setSenha] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setSenha(props.editarObj.senha);
    }

    const changeSenha = (e) => {

        setSenha(e.target.value);
        props.objEnvio.senha = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input 
                type="password" 
                className="form-control" 
                id="senha" 
                placeholder="" 
                value={senha} 
                onChange={changeSenha} 
            />
        </div>
    );
}

export default Senha;