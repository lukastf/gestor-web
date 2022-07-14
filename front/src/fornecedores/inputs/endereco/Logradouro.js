
import React, { useState } from 'react';

const Logradouro = (props) => {

    let index = props.index;
    props = props.props;

    const [logradouro, setLogradouro] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        //props.objEnvio.endereco[index].setLogradouro = setLogradouro;

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].logradouro = props.editarObj.endereco[index].logradouro;
            setLogradouro(props.editarObj.endereco[index].logradouro);
        }
    }

    const changeLogradouro = e => {
        
        setLogradouro(e.target.value);
        props.objEnvio.endereco[index].logradouro = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="logradouro">Logradouro</label>
            <select id="logradouro" className="form-control" value={logradouro} onChange={changeLogradouro}>
                <option>Tipo de Logradouro</option>
                <option>R.</option>
                <option>AV.</option>
                <option>PRC</option>
                <option>ROD</option>
                <option>EST</option>
            </select>
            {/*<input 
                id="logradouro"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={logradouro} 
                onChange={changeLogradouro} 
            />*/}
        </div>
    )
}

export default Logradouro;