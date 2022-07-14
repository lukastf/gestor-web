
import React, { useState } from 'react';
import getOptions from '../../../../../listaBase/getOptionsBase';

const TipoCartao = (props) => {

    let index = props.index;
    props = props.props;

    const [tipoCartao, setTipoCartao] = useState("");
    const [tiposCartao, setTiposCartao] = useState("");
    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        getOptions(props, "tiposCartao", setTiposCartao);
        if(props.editarObj) {

            props.objEnvio.adminCartao[index].tipoCartao = props.editarObj.adminCartao[index].tipoCartao;
            setTipoCartao(props.editarObj.adminCartao[index].tipoCartao);
        }
    }

    const changeTipoCartao = (e) => {

        setTipoCartao(e.target.value);
        //props.objEnvio.tipoCartao = e.target.value;
        props.objEnvio.adminCartao[index].tipoCartao = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="tipoCar">Tipo Cartão</label>
            <select id="tipoDoc" className="form-control" value={tipoCartao} onChange={changeTipoCartao}>
                <option>Escolha um tipo de cartão</option>
                {tiposCartao}
            </select>
        </div>
    );
}

export default TipoCartao;