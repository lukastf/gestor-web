
import React, { useState } from 'react';
import { dataMask } from '../../../../../listaBase/masks';

const DataFim = (props) => {

    let index = props.index;
    props = props.props;

    const [dataFim, setDataFim] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        if(props.editarObj) {

            props.objEnvio.agenda[index].dataFim = props.editarObj.agenda[index].dataFim;
            setDataFim(props.editarObj.agenda[index].dataFim);
        }
    }


    const changeDataFim = (e) => {

        let val = dataMask(e.target.value);

        setDataFim(val);
        props.objEnvio.agenda[index].dataFim = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="dataFim">Data Fim</label>
            <input 
                id="dataFim"
                type="text" 
                className="form-control" 
                placeholder="dd/mm/aa" 
                value={dataFim} 
                onChange={changeDataFim} 
                maxLength="10"
            />
        </div>
    )
}

export default DataFim;