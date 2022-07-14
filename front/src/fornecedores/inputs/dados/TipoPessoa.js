
import React, { useState }  from 'react';

const TipoPessoa = (props) => {

    props = props.props;

    const [tipoPessoa, setTipoPessoa] = useState("");
    const [check, setCheck] = useState("");

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.tipoPessoa = props.editarObj.tipoPessoa;
            setTipoPessoa(props.editarObj.tipoPessoa);
        }
    }

    const changeTipoPessoa = e => {

        setTipoPessoa(e.target.value); 
        props.objEnvio.tipoPessoa = e.target.value 
    }


    return (
        <div className="form-group">
            <label htmlFor="tipoPessoa">Tipo de Pessoa</label>
            <select id="tipoPessoa" className="form-control" value={tipoPessoa} onChange={changeTipoPessoa}>
                <option>Escolha um tipo de Pessoa</option>
                <option value="1">Pessoa Física</option>
                <option value="2">Pessoa Juridica</option>
            </select>
        </div>
    );
}

export default TipoPessoa;