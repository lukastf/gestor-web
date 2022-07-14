import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import modal from './modal';
import Axios from 'axios';
import { serverUrl } from '../../navbar/server';

import listar from './listar';

const listaBtns = (props, obj, i) => {

    const editar = () => {
                
        props.setUrl("/editar/" + props.titulo + obj._id);
        props.editarObj = obj;

        props.setRouteForm(props);
        //props.setRoute(<BancoForm props={props}/>);
            
    }

    const deletar = () => {

        Axios.delete(serverUrl + props.url + '/' + props.usuario._id + "/" + obj._id)
        .then((res) => {

            listar(props);
        })
        .catch();
    }

    const checkUsuario = () => {

        if (props.usuario.tipoUsuario === "Administrador" || props.usuario.tipoUsuario === "Administrador Master")
        return (
            <div className="float-right">
                <button 
                    type="button"
                    className="btn btn-light mx-1" data-toggle="modal" data-target={"#visualizarModal"+i}>
                        <FontAwesomeIcon icon={faFile} />
                </button>
                {modal(props, obj, "visualizarModal"+i, editar)}

                <button
                    type="button" 
                    className="btn btn-danger mx-1" data-toggle="modal" data-target={"#deletarModal"+i}>
                        <FontAwesomeIcon icon={faTrash} />
                </button>
                {modal(props, obj, "deletarModal"+i, deletar)}

                <button 
                    onClick={editar}
                    type="button" 
                    className="btn btn-primary mx-1">
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
            </div>
        )
        return "";
    }

    return (
        <td>
            {checkUsuario()}
        </td>
    )
}

export default listaBtns;