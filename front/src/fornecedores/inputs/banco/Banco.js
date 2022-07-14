
import React, { useState } from 'react';
import getOptions from '../../../listaBase/getOptionsBase';

const Banco = (props) => {

    props = props.props;

    const [banco, setBanco] = useState("");
    const [bancos, setBancos] = useState("");
    const [check, setCheck] = useState(false);
    
    if (!check) {
        
        setCheck(true);
        getOptions(props, "bancos", setBancos);
        if(props.editarObj) {

            props.objEnvio.banco = props.editarObj.banco;
            setBanco(props.editarObj.banco);
        }
    }

    const changeBanco = e => {
        setBanco(e.target.value);
        props.objEnvio.banco = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="banco">Banco</label>
            <select id="banco" className="form-control" value={banco} onChange={changeBanco}>
                <option>Escolha um Banco</option>
                {bancos}
            </select>
        </div>
    );
}

export default Banco;