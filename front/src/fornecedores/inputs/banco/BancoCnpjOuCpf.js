
import React, { useState }  from 'react';
import { cpfMask, cnpjMask } from '../../../listaBase/masks';

const BancoCnpjOuCpf = (props) => {

    props = props.props;

    const [formato, setFormato] = useState("cnpj");
    const [cnpjOuCpf, setCnpjOuCpf] = useState("");
    const [check, setCheck] = useState(false);
    
    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.cnpjOuCpfConta = props.editarObj.cnpjOuCpfConta;
            setCnpjOuCpf(props.editarObj.cnpjOuCpfConta);
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
        props.objEnvio.cnpjOuCpfConta = value;
    }

    return(
        <div className="form-group">

            <label htmlFor="cnpjOuCpf">CNPJ ou CPF do Banco</label>

            <div className="form-check">
                <label className="form-check-label mr-5">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name="optradio3" 
                        value="cnpj" 
                        defaultChecked
                        onClick={changeFormato}
                    /> Cnpj
                </label>
                <label className="form-check-label">
                    <input 
                        type="radio" 
                        className="form-check-input"  
                        name="optradio3" 
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

export default BancoCnpjOuCpf;