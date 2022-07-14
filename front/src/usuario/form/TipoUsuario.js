
import React, { useState } from 'react';

const TipoUsuario = (props) => {

    props = props.props;

    const [tipoUsuario, setTipoUsuario] = useState("Consultor");
    const [check, setCheck] = useState(false);

    if(!check) {

        

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.tipoUsuario = props.editarObj.tipoUsuario;
            setTipoUsuario(props.editarObj.tipoUsuario);
        } else 
            props.objEnvio.tipoUsuario = "Consultor";
    }

    const changeTipoUsuario = (e) => {
        
        setTipoUsuario(e.target.value);
        props.objEnvio.tipoUsuario = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="sel1">Tipo de Usuário</label>
            <select className="form-control" id="sel1" name="sellist1" value={tipoUsuario} onChange={changeTipoUsuario}>
                <option>Administrador</option>
                <option>Consultor</option>
            </select>
        </div>
    );
}

export default TipoUsuario;