
import React, { useState } from 'react';

const Endereco = (props) => {

    let index = props.index;
    props = props.props;

    const [endereco, setEndereco] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        //props.objEnvio.endereco[index].endereco = setEnder;
        props.objEnvio.endereco[index].setEndereco = setEndereco;

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].endereco = props.editarObj.endereco[index].endereco;
            setEndereco(props.editarObj.endereco[index].endereco);
        }
    }

    const changeEndereco = e => {
        
        setEndereco(e.target.value);
        props.objEnvio.endereco[index].endereco = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input 
                id="endereco"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={endereco} 
                onChange={changeEndereco} 
            />
        </div>
    )
}

export default Endereco;