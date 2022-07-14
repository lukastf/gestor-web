
import React, { useState } from 'react';

const VerTipoCartao = (props) => {

    let index = props.index;
    props = props.props;

    //if (typeof props.objEnvio.adminCartao == "undefined") props.objEnvio.adminCartao = [];

    //const [verTipoCartao, setVerTipoCartao] = useState("Sim");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj){

            props.objEnvio.adminCartao[index].verTipoCartao = props.editarObj.adminCartao[index].verTipoCartao;
        }
        //setVerTipoCartao(props.editarObj.verTipoCartao);
    }

    const changeVerTipoCartao = (e) => {

        //setVerTipoCartao(e.target.value);
        //props.objEnvio.verTipoCartao = e.target.value;
        props.objEnvio.adminCartao[index].verTipoCartao = e.target.value;
    }

    return (
        <div className="form-group">
            <label>Ver Tipo Cartão?</label>
            <div className="form-check">
                <label className="form-check-label">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name={"verTipoCartao" + index} 
                        value="Sim" 
                        defaultChecked
                        onClick={changeVerTipoCartao}
                    /> Sim
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name={"verTipoCartao" + index} 
                        value="Não"
                        onClick={changeVerTipoCartao}
                    />Não
                </label>
            </div>
        </div>
    );
}

export default VerTipoCartao;