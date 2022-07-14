
import React, { useState } from 'react';
import { numberMask } from '../../../listaBase/masks';

const DiaPagamento = (props) => {

    props = props.props;

    const [diaPagamento, setDiaPagamento] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.diaPagamento = props.editarObj.diaPagamento;
            setDiaPagamento(props.editarObj.diaPagamento);
        }
    }

    const changeDiaPag = e => {

        let val = numberMask(e.target.value);

        setDiaPagamento(val);
        props.objEnvio.diaPagamento = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="diaPag">Dia do Pagamento</label>
            <input 
                id="diaPag"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={diaPagamento} 
                onChange={changeDiaPag} 
                maxLength="2"
            />
        </div>
    );
}

export default DiaPagamento;