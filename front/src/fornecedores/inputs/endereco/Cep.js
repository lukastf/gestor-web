
import React, { useState } from 'react';
import Axios from 'axios';
import { cepMask } from '../../../listaBase/masks';

const Cep = (props) => {

    let index = props.index;
    props = props.props;
    
    const [cep, setCep] = useState("");
    const [check, setCheck] = useState(false);
    
    if(!check) {
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].cep = props.editarObj.endereco[index].cep;
            setCep(props.editarObj.endereco[index].cep);
        }
    }

    const changeCep = e => {

        let value = cepMask(e.target.value);
        props.objEnvio.endereco[index].cep = e.target.value;

        setCep(value);
        props.objEnvio.cep = value;

        if (value.length > 8) {
            
            Axios.get('https://viacep.com.br/ws/'+value+'/json/unicode/')
            .then((response) => {
        
                if (response.data.erro) {
                    console.log("erro");
                    //this.getCepErrorState();

                    return;
                }

                props.objEnvio.endereco[index].setEstado(response.data.uf);
                props.objEnvio.endereco[index].setCidade(response.data.localidade);
                props.objEnvio.endereco[index].setEndereco(response.data.logradouro);
                props.objEnvio.endereco[index].setBairro(response.data.bairro);

                props.objEnvio.endereco[index].estado = response.data.uf;
                props.objEnvio.endereco[index].cidade = response.data.localidade;
                props.objEnvio.endereco[index].endereco = response.data.logradouro;
                props.objEnvio.endereco[index].bairro = response.data.bairro;
            });
        }
    }

    return (
        <div className="form-group">
            <label htmlFor="cep">CEP</label>
            <input 
                id="cep"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={cep} 
                onChange={changeCep} 
            />
        </div>
    )
}

export default Cep;