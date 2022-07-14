
import React, { useState } from 'react';
import EnderecoBase from '../inputs/endereco/EnderecoBase';

const FornecedorFormEndereco = (props) => {

    props = props.props;

    const [adicionados, setAdicionados] = useState([]);
    const [adicionadosRender, setAdicionadosRender] = useState([]);
    const [check, setCheck] = useState(false);

    if (!check) {
        
        setCheck(true);
        props.objEnvio.endereco = [];
    }

    const adicionar = () => {

        let temp = adicionados;
        let index = adicionados.length + 1;

        temp.push(
            <div className="">
                {<EnderecoBase index={index} props={props}/>}
            </div>
        );

        setAdicionados(temp);
        setAdicionadosRender(<div>{adicionados}</div>);
    }

    const remover = () => {

        let temp = adicionados;
        temp.pop();

        setAdicionados(temp);
        setAdicionadosRender(<div>{adicionados}</div>);
    }

    const btnRemover = () => {

        if (adicionados.length > 0) {
            return <button className="btn btn-danger mt-3" type="button" onClick={remover}> Remover </button>
        }

        return "";
    }

    return(
        <>
        <div className="form-group">
            <EnderecoBase index={0} props={props}/>
            <button className="btn btn-primary mt-3 mr-4" type="button" onClick={adicionar}> Adicionar Endereço </button>
            {btnRemover()}
        </div>
        {adicionadosRender}
        </>
    );
}

export default FornecedorFormEndereco;