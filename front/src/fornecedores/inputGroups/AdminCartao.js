import React, { useState } from 'react';
//import RamoDeAtividadeBase from './RamoDeAtividadeBase';
import AdminCartaoBase from '../inputs/adminCartao/AdminCartaoBase';

const AdminCartao = (props) => {

    props = props.props;
    

    const [adicionados, setAdicionados] = useState([]);
    const [adicionadosRender, setAdicionadosRender] = useState([]);
    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        props.objEnvio.adminCartao = [];
    }

    const adicionar = () => {

        let temp = adicionados;
        let index = adicionados.length + 1;

        temp.push(
            <div className="">
                {<AdminCartaoBase index={index} props={props}/>}
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

        props.objEnvio.adminCartao.pop();
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
            <AdminCartaoBase index={0} props={props}/>
            <button className="btn btn-primary mt-3 mr-4" type="button" onClick={adicionar}> Adicionar Adm Cartao </button>
            {btnRemover()}
        </div>
        {adicionadosRender}
        </>
    );
}

export default AdminCartao;