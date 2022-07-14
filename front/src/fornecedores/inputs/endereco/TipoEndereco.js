
import React, { useState } from 'react';

const TipoEndereco = (props) => {

    let index = props.index;
    props = props.props;

    const [tipoEndereco, setTipoEndereco] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].tipoEndereco = props.editarObj.endereco[index].tipoEndereco;
            setTipoEndereco(props.editarObj.endereco[index].tipoEndereco);
        }
    }

    const changeTipoEndereco = e => {
        setTipoEndereco(e.target.value);
        props.objEnvio.endereco[index].tipoEndereco = e.target.value;
    }

    return (
        <div className="form-group">
            <label>Tipo Endereço</label>
            <select className="form-control" value={tipoEndereco} onChange={changeTipoEndereco}>
                <option>Escolha o Tipo de Endereço</option>
                <option value="1">Residencial</option>
                <option value="2">Comercial</option>
                <option value="3">Cobrança</option>
                <option value="4">Produção</option>
                <option value="5">Filial</option>
                <option value="6">Seguro</option>
            </select>
        </div>
    );
}

export default TipoEndereco;