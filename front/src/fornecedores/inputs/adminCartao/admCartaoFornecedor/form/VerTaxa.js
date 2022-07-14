
import React, { useState } from 'react';

const VerTaxa = (props) => {

    let index = props.index;
    props = props.props;

    //if (typeof props.objEnvio.adminCartao == "undefined") props.objEnvio.adminCartao = [];

    //const [verTaxa, setVerTaxa] = useState("Sim");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.adminCartao[index].verTaxa = props.editarObj.adminCartao[index].verTaxa;
            //setVerTaxa(props.editarObj.verTaxa);
        }
    }

    const changeVerTaxa = (e) => {

        //e.preventDefault();

        //setVerTaxa(e.target.value);
        //props.objEnvio.verTaxa = e.target.value;
        props.objEnvio.adminCartao[index].verTaxa = e.target.value;
    }

    return(
        <div className="form-group">
            <label>Ver Taxa?</label>
            <div className="form-check">
                <label className="form-check-label">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name={"verTaxa" + index} 
                        value="Sim" 
                        defaultChecked
                        onClick={changeVerTaxa}
                    /> Sim
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name={"verTaxa" + index} 
                        value="Não"
                        onClick={changeVerTaxa}
                    />Não
                </label>
            </div>
        </div>
    );
}

export default VerTaxa;