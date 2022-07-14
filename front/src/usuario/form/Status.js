
import React, { useState } from 'react';

const Status = (props) => {

    props = props.props;

    //const [status, setStatus] = useState("Ativo");
    const [check, setCheck] = useState(false);

    const [defaultChecked1, setDefaultChecked1] = useState(false);
    const [defaultChecked2, setDefaultChecked2] = useState(false);

    if(!check) {

        setCheck(true);

        if(props.editarObj) {

            props.objEnvio.status = props.editarObj.status;
            if (props.editarObj.status === "Ativo") setDefaultChecked1(true);
            else if (props.editarObj.status === "Inativo") setDefaultChecked2(true);
        } 
        else {
            setDefaultChecked1(true);
            props.objEnvio.status = "Ativo";
        }
        

        
        //setStatus(props.editarObj.status);
    }

    const changeStatus = (e) => {

        //setStatus(e.target.value);
        props.objEnvio.status = e.target.value;
    }

    return(
        <div className="form-group">
            <label>Usuario Ativo?</label>
            <div className="form-check">
                <label className="form-check-label" htmlFor="radio1">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="radio1" 
                        name="optradio" 
                        value="Ativo" 
                        defaultChecked={defaultChecked1}
                        onClick={changeStatus}
                    /> Sim
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="radio2">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="radio2" 
                        name="optradio" 
                        value="Inativo"
                        defaultChecked={defaultChecked2}
                        onClick={changeStatus}
                    />Não
                </label>
            </div>
        </div>
    );
}

export default Status;