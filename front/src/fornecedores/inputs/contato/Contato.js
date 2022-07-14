import React, { useState } from 'react';

const Contato = (props) => {

    props = props.props;

    const [contato, setContato] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.contato = props.editarObj.contato;
            setContato(props.editarObj.contato);
        }
    }

    const changeContato = e => {
        setContato(e.target.value);
        props.objEnvio.contato = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="contato">Contato</label>
            <input 
                id="contato"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={contato} 
                onChange={changeContato} 
            />
        </div>
    );
}

export default Contato;