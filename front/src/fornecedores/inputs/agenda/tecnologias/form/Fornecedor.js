
import React, { useState } from 'react';
import getOptions from '../../../listaBase/getOptionsBase';

const Fornecedor = (props) => {

    props = props.props;

    const [fornecedor, setFornecedor] = useState("");
    const [fornecedores, setFornecedores] = useState("");
    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        getOptions(props, "fornecedores", setFornecedores);
        if(props.editarObj) {
            
            props.objEnvio.fornecedor = props.editarObj.fornecedor;
            setFornecedor(props.editarObj.fornecedor);
        }
    }

    const changeFornecedor = (e) => {

        setFornecedor(e.target.value);
        props.objEnvio.fornecedor = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="fornecedor">Fornecedor</label>
            <select id="fornecedor" className="form-control" value={fornecedor} onChange={changeFornecedor}>
                <option>Escolha um Fornecedor</option>
                {fornecedores}
            </select>
        </div>
    );
}

export default Fornecedor;