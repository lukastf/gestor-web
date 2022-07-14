
import React, { useState } from 'react';

const CepFinal = (props) => {

    props = props.props;

    const [cepFim, setCepFim] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setCepFim(props.editarObj.cepFinal);
    }

    const changeCepFim = (e) => {

        setCepFim(e.target.value);
        props.objEnvio.cepFinal = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="cep-final">Cep Final</label>
            <input 
                type="text" 
                className="form-control" 
                id="cep-final" 
                placeholder="" 
                value={cepFim}
                onChange={changeCepFim}
            />
        </div>
    );
}

export default CepFinal;