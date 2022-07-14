
import React, { useState } from 'react';

const Complemento = (props) => {

    let index = props.index;
    props = props.props;

    const [complemento, setComplemento] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].complemento = props.editarObj.endereco[index].complemento;
            setComplemento(props.editarObj.endereco[index].complemento);
        }
    }

    const changeComplemento = e => {

        setComplemento(e.target.value);
        props.objEnvio.endereco[index].complemento = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="complemento">Complemento</label>
            <input
                id="complemento" 
                type="text" 
                className="form-control" 
                placeholder="" 
                value={complemento} 
                onChange={changeComplemento} 
            />
        </div>
    );
}

export default Complemento