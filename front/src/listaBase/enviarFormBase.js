
import React from 'react';
import axios from 'axios';
import { serverUrl } from '../navbar/server';

const enviarForm = (props, routeEnvio, set) => {

    let httpReq = axios.post;
    if(props.editarObj) httpReq = axios.put;

    //console.log("teste");
    //console.log(props.objEnvio);

    httpReq(serverUrl + "/" + routeEnvio + "/"+ props.usuario._id, props.objEnvio)
    .then((res) => {

        set(
            <p style={{color: "green"}}> Cadastrado com Sucesso </p>
        );

        props.editarObj = false;
    })
    .catch((err) => {

        set(
            <p style={{color: "red"}}> Falha ao Cadastrar </p>
        );
    });
}

export default enviarForm;