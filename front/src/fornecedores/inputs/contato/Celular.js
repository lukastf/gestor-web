
import React, { useState } from 'react';
import { celularMask } from '../../../listaBase/masks';

const Celular = (props) => {

    props = props.props;

    const [celular, setCelular] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.celular = props.editarObj.celular;
            setCelular(props.editarObj.celular);
        }
    }
    
    const changeCelular = e => {

        let val = celularMask(e.target.value);

        setCelular(val);
        props.objEnvio.celular = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <input 
                id="celular"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={celular} 
                onChange={changeCelular} 
            />
        </div>
    );
}

export default Celular;