
import React, { useState } from 'react';

const Cidade = (props) => {

    let index = props.index;
    props = props.props;

    const [cidade, setCidade] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        props.objEnvio.endereco[index].setCidade = setCidade;

        setCheck(true);
        if(props.editarObj) {
            
            props.objEnvio.endereco[index].cidade = props.editarObj.endereco[index].cidade;
            setCidade(props.editarObj.endereco[index].cidade);
        }
    }

    const changeCidade = e => {
        
        setCidade(e.target.value);
        props.objEnvio.endereco[index].cidade = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
            <input 
                id="cidade"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={cidade} 
                onChange={changeCidade} 
            />
        </div>
    );
}

export default Cidade;