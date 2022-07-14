
import React, { useState }  from 'react';

const NomeFantasia = (props) => {

    props = props.props;

    const [nomeFantasia, setNomeFantasia] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.nomeFantasia = props.editarObj.nomeFantasia;
            setNomeFantasia(props.editarObj.nomeFantasia);
        }
    }

    const changeNomeFantasia = e => {
        setNomeFantasia(e.target.value); 
        props.objEnvio.nomeFantasia = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="nomeFantasia">Nome Fantasia</label>
            <input 
                id="nomeFantasia"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={nomeFantasia} 
                onChange={changeNomeFantasia} 
            />
        </div>
    );
}

export default NomeFantasia;