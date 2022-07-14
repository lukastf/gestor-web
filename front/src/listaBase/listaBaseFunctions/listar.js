import React from 'react';
import Axios from 'axios';
import { serverUrl } from '../../navbar/server';
import objsProps from './objProps';
import listaBtns from './listaBtns';


import Paginacao from '../../paginacao/Paginacao2.0';

const listar = (props) => {

    const changePageId = (id) => {
        props.pageId = id;
    }

    let propSearch = "nome";
    if (props.url === "/fornecedores") propSearch = "nomeFantasia";
        
    Axios.get(

        serverUrl + 
        props.url +
        '/' + props.usuario._id +
        '/' + props.itensPage +
        '/pageId/' + props.pageId +
        '/'+ propSearch +
        '/' + props.search 

    ).then((res2) => {

        if (typeof res2.data === "undefined") return;

        let objs = res2.data;
        let tempArr = [];

        for (let i = 0; i < objs.length; i++) {
            
            //let d = new Date(fornecedores[i].dataCad);
            //let data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            let index = i + 1;

            tempArr.push(
            <tr key={i}>
                <th scope="row">{index}</th>
                {objsProps(props, objs[i])}
                {listaBtns(props, objs[i], i)}
            </tr>
            );
        }

        props.setListarRender(tempArr);
        
        props.setPaginacaoRender(
            <Paginacao
                url={
                    serverUrl + props.url +
                    '/' + props.usuario._id +
                    '/' + props.itensPage +
                    '/'+ propSearch +
                    '/' + props.search
                }

                //itensPage={props.itensPage}
                atualizarObjs={listar}
                changePageId={changePageId}

                props={props}
            />
        );
        
    }).catch((err) => {
        console.log(err);
    });
}

export default listar;