import React, { useState } from 'react';

import getOptions from '../../../listaBase/getOptionsBase';

const RamoDeAtividadeBase = (props) => {

    let index = props.index;
    props = props.props;

    const [ramoAtividade, setRamoAtividade] = useState("");
    const [ramosAtividade, setRamosAtividade] = useState([]);
    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        getOptions(props, "ramosAtividade", setRamosAtividade);
        //if(props.editarObj) setRamoAtividade(props.editarObj.ramoAtividade);
        if(props.editarObj) {

            props.objEnvio.ramoAtividade[index] = props.editarObj.ramoAtividade[index];
            setRamoAtividade(props.editarObj.ramoAtividade[index]);
        }
    }

    const changeRamoAtividade = e => {

        //console.log(props.objEnvio.ramoAtividade);

        setRamoAtividade(e.target.value);
        //props.objEnvio.ramoAtividade = e.target.value;
        props.objEnvio.ramoAtividade[index] = e.target.value;
    }

    return(
    <select id="ramoAtividade" className="form-control" value={ramoAtividade} onChange={changeRamoAtividade}>
        <option>Escolha um Ramo de Atividade</option>
        {ramosAtividade}
    </select>);
}

export default RamoDeAtividadeBase;