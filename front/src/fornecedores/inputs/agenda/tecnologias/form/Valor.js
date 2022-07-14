
import React, { useState } from 'react';
import { moneyMask } from '../../../../../listaBase/masks';



const Valor = (props) => {

    let index = props.index;
    props = props.props;

    const [valor, setValor] = useState("");
    const [checkAux, setCheckAux] = useState(false);

    if (!checkAux) {

        setCheckAux(true);
        if(props.editarObj) {

            props.objEnvio.agenda[index].valor = props.editarObj.agenda[index].valor;
            setValor(props.editarObj.agenda[index].valor);
        }
    }

    const changeValor = (e) => {

        let val = moneyMask(e.target.value);

        setValor(val);
        props.objEnvio.agenda[index].valor = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="valor">Valor</label>
            <input 
                id="valor"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={valor} 
                onChange={changeValor} 
            />
        </div>
    );
}

export default Valor;