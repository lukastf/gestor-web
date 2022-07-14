
import React, { useState } from 'react';

const CepInicial = (props) => {

    props = props.props;

    const [cepIni, setCepIni] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setCepIni(props.editarObj.cepInicial);
    }

    const changeCepIni = (e) => {

        setCepIni(e.target.value);
        props.objEnvio.cepInicial = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="cep-inicial">Cep Inicial</label>
            <input 
                type="text" 
                className="form-control" 
                id="cep-inicial" 
                placeholder="" 
                value={cepIni}
                onChange={changeCepIni}
            />
        </div>
    );
}

export default CepInicial;