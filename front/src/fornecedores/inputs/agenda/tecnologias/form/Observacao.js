
import React, { useState } from 'react';

const Observacao = (props) => {

    let index = props.index;
    props = props.props;

    const [observacao, setObservacao] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        if(props.editarObj) {
            
            props.objEnvio.agenda[index].observacao = props.editarObj.agenda[index].observacao;
            setObservacao(props.editarObj.agenda[index].observacao);
        }
    }

    const changeObservacao = (e) => {

        setObservacao(e.target.value);
        props.objEnvio.agenda[index].observacao = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="obs">Observação / Historico</label>
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