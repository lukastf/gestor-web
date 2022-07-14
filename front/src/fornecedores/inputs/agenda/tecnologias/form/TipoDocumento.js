
import React, { useState } from 'react';
import getOptions from '../../../../../listaBase/getOptionsBase';

const TipoDocumento = (props) => {

    let index = props.index;
    props = props.props;

    const [tipoDocumento, setTipoDocumento] = useState("");
    const [tiposDocumento, setTiposDocumento] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        getOptions(props, "tiposDocumento", setTiposDocumento);
        if(props.editarObj) {

            props.objEnvio.agenda[index].tipoDocumento = props.editarObj.agenda[index].tipoDocumento;
            setTipoDocumento(props.editarObj.agenda[index].tipoDocumento);
        }
    }

    const changeTipoDocumento = (e) => {

        setTipoDocumento(e.target.value);
        props.objEnvio.agenda[index].tipoDocumento = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="tipoDoc">Tipo Documento</label>
            <select id="tipoDoc" className="form-control" value={tipoDocumento} onChange={changeTipoDocumento}>
                <option>Escolha um tipo de documento</option>
                {tiposDocumento}
            </select>
        </div>
    );
}

export default TipoDocumento;