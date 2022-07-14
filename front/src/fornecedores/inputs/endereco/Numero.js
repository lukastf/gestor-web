
import React, { useState } from 'react';

const Numero = (props) => {

    let index = props.index;
    props = props.props;

    const [numero, setNumero] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].numero = props.editarObj.endereco[index].numero;
            setNumero(props.editarObj.endereco[index].numero);
        }
    }

    const changeNumero = e => {

        setNumero(e.target.value);
        props.objEnvio.endereco[index].numero = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="numero">Numero</label>
            <input 
                id="numero"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={numero} 
                onChange={changeNumero} 
            />
        </div>
    );
}

export default Numero;