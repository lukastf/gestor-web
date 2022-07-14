import React, { useState } from 'react';
import { moneyMask } from '../../../listaBase/masks';

const ValorDocumento = (props) => {

    props = props.props;

    const [valorDoc, setValorDoc] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.valorDoc = props.editarObj.valorDoc;
            setValorDoc(props.editarObj.valorDoc);
        }
    }

    const changeValorDoc = e => {
        
        let val = moneyMask(e.target.value);

        setValorDoc(val);
        props.objEnvio.valorDoc = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="valorDoc">Valor do Documento</label>
            <input 
                id="valorDoc"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={valorDoc} 
                onChange={changeValorDoc} 
            />
        </div>
    );
}

export default ValorDocumento;