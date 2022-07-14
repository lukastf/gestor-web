
import React, { useState } from 'react';

const Nome = (props) => {

    props = props.props;

    const [nome, setNome] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setNome(props.editarObj.nome);
    }

    const changeNome = (e) => {

        setNome(e.target.value);
        props.objEnvio.nome = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="nome">Nome do Usuário</label>
            <input 
                type="email" 
                className="form-control" 
                id="nome" 
                placeholder="" 
                value={nome} 
                onChange={changeNome} 
            />
        </div>
    );
}

export default Nome;