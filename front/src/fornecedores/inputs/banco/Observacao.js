
import React, { useState } from 'react';

const Observacao = (props) => {

    props = props.props;

    const [observacao, setObservacao] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.observacao = props.editarObj.observacao;
            setObservacao(props.editarObj.observacao);
        }
    }

    const changeObservacao = e => {

        setObservacao(e.target.value);
        props.objEnvio.observacao = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="obs">Observação</label>
            <input 
                id="obs"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={observacao} 
                onChange={changeObservacao} 
            />
        </div>
    );
}

export default Observacao;