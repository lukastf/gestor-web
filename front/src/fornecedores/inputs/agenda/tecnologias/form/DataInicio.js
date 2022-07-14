
import React, { useState } from 'react';
import { dataMask } from '../../../../../listaBase/masks';

const DataInicio = (props) => {

    let index = props.index;
    props = props.props;

    const [dataInicio, setDataInicio] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        if(props.editarObj) {
            
            props.objEnvio.agenda[index].dataInicio = props.editarObj.agenda[index].dataInicio;
            setDataInicio(props.editarObj.agenda[index].dataInicio);
        }
    }


    const changeDataInicio = (e) => {

        let val = dataMask(e.target.value);

        setDataInicio(val);
        props.objEnvio.agenda[index].dataInicio = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="dataInicio">Data Inicio</label>
            <input 
                id="dataInicio"
                type="text" 
                className="form-control" 
                placeholder="dd/mm/aa" 
                value={dataInicio} 
                onChange={changeDataInicio} 
                maxLength="10"
            />
        </div>
    )
}

export default DataInicio;