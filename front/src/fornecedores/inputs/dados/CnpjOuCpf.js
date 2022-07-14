
import React, { useState }  from 'react';
import { cpfMask, cnpjMask } from '../../../listaBase/masks';

const CnpjOuCpf = (props) => {

    props = props.props;

    const [formato, setFormato] = useState("cnpj");
    const [cnpjOuCpf, setCnpjOuCpf] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.cnpjOuCpf = props.editarObj.cnpjOuCpf;
            setCnpjOuCpf(props.editarObj.cnpjOuCpf);
        }
    }

    const changeFormato = e => {

        let val = e.target.value;

        if (val === "cnpj") setFormato("cnpj");
        else if (val === "cpf") setFormato("cpf");
    }

    const changeCnpjOuCpf = e => {

        let value = e.target.value;
        
        if (formato === "cnpj")
        value = cnpjMask(value);

        else if (formato === "cpf")
        value = cpfMask(value);

        setCnpjOuCpf(value);
        props.objEnvio.cnpjOuCpf = value;
    }

    return(
        <div className="form-group">

            <label htmlFor="cnpjOuCpf">CNPJ ou CPF</label>

            <div className="form-check">
                <label className="form-check-label mr-5" htmlFor="radio1">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="radio1" 
                        name="optradio" 
                        value="cnpj" 
                        defaultChecked
                        onClick={changeFormato}
                    /> Cnpj
                </label>
                <label className="form-check-label" htmlFor="radio2">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="radio2" 
                        name="optradio" 
                        value="cpf"
                        onClick={changeFormato}
                    />Cpf
                </label>
            </div>
            
            <input 
                id="cnpjOuCpf"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={cnpjOuCpf} 
                onChange={changeCnpjOuCpf} 
            />
        </div>
    );
}

export default CnpjOuCpf;