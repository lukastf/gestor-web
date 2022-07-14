
import React, { useState } from 'react';
import getOptions from '../../../../listaBase/getOptionsBase';

const Origem = (props) => {

    let index = props.index;
    props = props.props;

    const [origem, setOrigem] = useState("");
    const [origens, setOrigens] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        getOptions(props, "origens", setOrigens);
        if(props.editarObj) {
        
            props.objEnvio.numeroLogico[index].origem = props.editarObj.numeroLogico[index].origem;
            setOrigem(props.editarObj.numeroLogico[index].origem);
        }

    }
    const changeOrigem = e => {
        setOrigem(e.target.value);
        props.objEnvio.numeroLogico[index].origem = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="origem">Origem</label>
            <select id="origem" className="form-control" value={origem} onChange={changeOrigem}>
                <option>Escolha uma Origem</option>
                {origens}
            </select>
        </div>
    );
}

export default Origem;