
import React, { useState } from 'react';

const Bairro = (props) => {

    let index = props.index;
    props = props.props;

    const [bairro, setBairro] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        props.objEnvio.endereco[index].setBairro = setBairro;

        setCheck(true);
        if(props.editarObj){

            props.objEnvio.endereco[index].bairro = props.editarObj.endereco[index].bairro;
            setBairro(props.editarObj.endereco[index].bairro);
        } 
    }

    const changeBairro = e => {
        
        setBairro(e.target.value);
        props.objEnvio.endereco[index].bairro = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="bairro">Bairro</label>
            <input 
                id="bairro"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={bairro} 
                onChange={changeBairro} 
            />
        </div>
    );
}

export default Bairro;