
import React, { useState } from 'react';

const NumeroLogico = (props) => {

    let index = props.index;
    props = props.props;

    const [numeroLogico, setNumeroLogico] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.numeroLogico[index].numeroLogico = props.editarObj.numeroLogico[index].numeroLogico;
            setNumeroLogico(props.editarObj.numeroLogico[index].numeroLogico);
        }
    }

    const changeNumeroLogico = e => {

        setNumeroLogico(e.target.value);
        props.objEnvio.numeroLogico[index].numeroLogico = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="numeroLogico">Numero Lógico - EC</label>
            <input 
                id="numeroLogico"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={numeroLogico} 
                onChange={changeNumeroLogico} 
            />
        </div>
    );
}

export default NumeroLogico;