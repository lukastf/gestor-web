
import React, { useState } from 'react';
import titulosColunas from './listaBaseFunctions/titulosColunas';
import tableFilters from './listaBaseFunctions/tableFilters';
import pesquisar from './listaBaseFunctions/pesquisar';
import { serverUrl } from '../navbar/server';
import Axios from 'axios';

const ListaBase = (props) => {

    props = props.props;

    const [listarRender, setListarRender] = useState(null);
    const [paginacaoRender, setPaginacaoRender] = useState(null);

    const novo = () => {

        props.setUrl("/novo" + props.tituloBtnNovo);
        props.setRouteForm(props);
        //props.setRoute(<BancoForm props={props}/>);
    }

    const [execOneTime, setExecOneTime] = useState(false);
    if (!execOneTime) {

        setExecOneTime(true);

        props.itensPage = 20;
        props.pageId = 0;
        props.search = "$";
        props.setListarRender = setListarRender;
        props.setPaginacaoRender = setPaginacaoRender;

        // pegar vendedores
        if (props.url === "/fornecedores") {

            Axios.get(
                serverUrl + 
                '/usuarios' +
                '/' + props.usuario._id +
                '/0' +
                '/nome'+
                '/$'
            )
            .then((pages) => {
        
                pages = pages.data;
        
                Axios.get(serverUrl + "/usuarios/" + props.usuario._id + "/0/pageId/" + pages[0] + "/nome/$")
                .then((response)=> {
        
                    props.vendedores = response.data;
                    pesquisar(props);
                });
        
            }).catch((err) => {
        
                console.log(err);
            });

        } else pesquisar(props);
    }

    const checkBtnNovo = () => {

        if (
            props.tituloBtnNovo !== "Fornecedor" && 
            (props.usuario.tipoUsuario !== "Administrador" && props.usuario.tipoUsuario !== "Administrador Master")) return "";

        return(
        <button 
            className="btn btn-success float-right" 
            onClick={novo}> Novo {props.tituloBtnNovo}
        </button>
        );
    }

    return(
        <div className="container-fluid p-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    {props.titulo}
                    {checkBtnNovo()}
                </h3>
            </div>
            {tableFilters(props)}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {titulosColunas(props)}
                    </tr>
                </thead>
                <tbody>
                    {listarRender}
                </tbody>
            </table>
            {paginacaoRender}
        </div>
    );
}

export default ListaBase;