
import React, { useState } from 'react';
import { celularMask } from '../../../listaBase/masks';

const TelefoneEndereco = (props) => {

    let index = props.index;
    props = props.props;

    const [tel, setTel] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {
          
            props.objEnvio.endereco[index].telefone = props.editarObj.endereco[index].telefone;
            setTel(props.editarObj.endereco[index].telefone);
        } 
    }

    const changeTel = e => {
        
        let val = celularMask(e.target.value);

        setTel(val);
        props.objEnvio.endereco[index].telefone = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="telEndereco">Telefone Endereço</label>
            <input 
                id="telEndereco"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={tel} 
                onChange={changeTel} 
            />
        </div>
    )
}

export default TelefoneEndereco;