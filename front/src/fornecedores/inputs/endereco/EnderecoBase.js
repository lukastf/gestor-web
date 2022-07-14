
import React from 'react';

import Cep from './Cep';
import TipoEndereco from './TipoEndereco';
import Logradouro from './Logradouro';
import Numero from './Numero';
import Complemento from './Complemento';
import Bairro from './Bairro';
import Cidade from './Cidade';
import Estado from './Estado';
import Endereco from './Endereco';
import TelefoneEndereco from './Telefone';

const EnderecoBase = (props) => {

    let index = props.index;
    props = props.props;

    if (typeof props.objEnvio.endereco[index] === "undefined") props.objEnvio.endereco[index] = {};
    

    /*const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");

    props.estado = estado;
    props.setEstado = setEstado;

    props.cidade = cidade;
    props.setCidade = setCidade;

    props.logradouro = logradouro;
    props.setLogradouro = setLogradouro;

    props.bairro = bairro;
    props.setBairro = setBairro;*/
    
    return (
        <div>
            <div>
                <h3 className="jumbotron titulo-tabela">
                    Endereco
                </h3>
            </div>
            <Cep index={index} props={props}/>
            <Estado index={index} props={props}/>
            <Cidade index={index} props={props}/>
            <Logradouro index={index} props={props}/>
            <Endereco index={index} props={props}/>
            <Bairro index={index} props={props}/>
            <TipoEndereco index={index} props={props}/>
            <Numero index={index} props={props}/>
            <Complemento index={index} props={props}/>
            <TelefoneEndereco index={index} props={props}/>
        </div>
    );
}

export default EnderecoBase;