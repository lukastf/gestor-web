
import React, { useState } from 'react';

const Frequencia = (props) => {

    let index = props.index;
    props = props.props;

    const [frequencia, setFrequencia] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        if(props.editarObj) {
            
            props.objEnvio.agenda[index].frequencia = props.editarObj.agenda[index].frequencia;
            setFrequencia(props.editarObj.agenda[index].frequencia);
        }
    }

    const changeFrequencia = (e) => {

        setFrequencia(e.target.value);
        props.objEnvio.agenda[index].frequencia = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="frequencia">Frequencia</label>
            <select id="frequencia" className="form-control" value={frequencia} onChange={changeFrequencia}>
                <option>Escolha a Frequencia</option>
                <option value="1">Fechamento</option>
                <option value="2">Mensal</option>
                <option value="3">Bimestral</option>
                <option value="4">Semestral</option>
                <option value="5">Anual</option>
                <option value="6">Unica</option>
            </select>
        </div>
    );
}

export default Frequencia;