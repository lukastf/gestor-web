import React from 'react';
import Axios from 'axios';
import { serverUrl } from '../navbar/server';

const getOptions = (props, routeEnvio, set) => {

    let result = [];

    Axios.get(serverUrl + "/"+ routeEnvio +"/" + props.usuario._id + "/0/nome/$")
    .then((pages)=>{

        pages = pages.data;

        Axios.get(serverUrl + "/"+ routeEnvio +"/" + props.usuario._id + "/0/pageId/" + pages[0] + "/nome/$")
        .then((response)=>{

            response = response.data;

            for (let i = 0; i < response.length; i++) {

                if (typeof response[i].nomeFantasia !== "undefined")
                result.push(<option key={i} value={response[i].idOrg}>{response[i].nomeFantasia}</option>);
                
                else
                result.push(<option key={i} value={response[i].idOrg}>{response[i].nome}</option>);
            }

            set(result);
        })
    }).catch((e) => {
        console.log(e);
    });
}

export default getOptions;