
import React, {useState} from 'react';
import getOptions from '../../../listaBase/getOptionsBase';


const SelectConsultor = (props) => {
    props = props.props;

    const [consultor, setConsultor] = useState("");
    const [consultores, setConsultores] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        getOptions(props, "usuarios", setConsultores);
        if(props.editarObj) {

            props.objEnvio.vendedor = props.editarObj.vendedor;
            setConsultor(props.editarObj.vendedor);
        }
    }

    const change = e => {

        setConsultor(e.target.value);
        props.objEnvio.vendedor = e.target.value;
    }

    const checkAdm = () => {

        if((props.usuario.tipoUsuario === "Administrador" || props.usuario.tipoUsuario === "Administrador Master")) 
        return (
        <div className="form-group">
            <label htmlFor="consultor">Selecione o Consultor</label>
            <select id="consultor" className="form-control" value={consultor} onChange={change}>
                <option>Escolha um Consultor</option>
                {consultores}
            </select>
        </div>);

        return "";
    }

    return(
        checkAdm()
    );
}

export default SelectConsultor;