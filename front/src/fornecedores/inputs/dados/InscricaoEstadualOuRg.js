
import React, { useState }  from 'react';
import { rgMask } from '../../../listaBase/masks';

const InscricaoEstadualOuRg = (props) => {

    props = props.props;

    const [formato, setFormato] = useState("inscricaoEstadual");
    const [inscricaoEstadualOuRg, setInscricaoEstadualOuRg] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.inscEstOuRg = props.editarObj.inscEstOuRg;
            setInscricaoEstadualOuRg(props.editarObj.inscEstOuRg);
        }
    }

    const changeFormato = e => {

        let val = e.target.value;

        if (val === "inscricaoEstadual") setFormato("inscricaoEstadual");
        else if (val === "rg") setFormato("rg");
    }

    const changeInscricaoEstadualOuRg = e => {

        let value = e.target.value;
        
        //if (formato === "inscricaoEstadual")
        //value = numberMask(value);

        if (formato === "rg")
        value = rgMask(value);

        setInscricaoEstadualOuRg(value);
        props.objEnvio.inscEstOuRg = value;
    }

    return(
        <div className="form-group">

            <label htmlFor="iscricaoEstadualOuRg">Inscrição estadual ou Rg</label>

            <div className="form-check">
                <label className="form-check-label mr-5" htmlFor="radio3">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="radio3" 
                        name="optradio2" 
                        value="inscricaoEstadual" 
                        defaultChecked
                        onClick={changeFormato}
                    /> Inscrição Estadual
                </label>
                <label className="form-check-label" htmlFor="radio4">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="radio4" 
                        name="optradio2" 
                        value="rg"
                        onClick={changeFormato}
                    />Rg
                </label>
            </div>

            <input 
                id="iscricaoEstadualOuRg"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={inscricaoEstadualOuRg} 
                onChange={changeInscricaoEstadualOuRg} 
            />
        </div>
    );
}

export default InscricaoEstadualOuRg;