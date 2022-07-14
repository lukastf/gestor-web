
import React, { useState } from 'react';
import { moneyMask } from '../../../../../listaBase/masks';

const TaxaAdministrativa = (props) => {

    let index = props.index;
    props = props.props;

    const [taxaAdm, setTaxaAdm] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {
            
            props.objEnvio.adminCartao[index].taxaAdm = props.editarObj.adminCartao[index].taxaAdm;
            setTaxaAdm(props.editarObj.adminCartao[index].taxaAdm);
        }
    }

    const changeTaxaAdm = (e) => {

        let val = moneyMask(e.target.value);

        setTaxaAdm(val);
        //props.objEnvio.taxaAdm = e.target.value;
        props.objEnvio.adminCartao[index].taxaAdm = val;
    }

    return(
        <div className="form-group">
            <label htmlFor="taxaAdm">Taxa Administrativa</label>
            <input 
                id="taxaAdm"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={taxaAdm} 
                onChange={changeTaxaAdm} 
            />
        </div>
    );
}

export default TaxaAdministrativa;