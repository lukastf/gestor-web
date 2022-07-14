
import React, { useState } from 'react';
import { moneyMask } from '../../../listaBase/masks';

const TaxaAdesao = (props) => {

    props = props.props;

    const [taxaAdesao, setTaxaAdesao] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.taxaCred = props.editarObj.taxaCred;
            setTaxaAdesao(props.editarObj.taxaCred);
        }
    }

    const changeTaxaAdesao = e => {
        
        let val = moneyMask(e.target.value);

        setTaxaAdesao(val);
        props.objEnvio.taxaCred = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="taxaAdesao">Taxa de Adesão</label>
            <input 
                id="taxaAdesao"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={taxaAdesao} 
                onChange={changeTaxaAdesao} 
            />
        </div>
    );
}

export default TaxaAdesao;