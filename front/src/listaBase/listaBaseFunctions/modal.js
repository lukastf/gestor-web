
import React from 'react';
import objsProps from './objProps';

const modal = (props, obj, id, func) => {

    const btn = () => {

        if (id.includes("visualizar"))
        return <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={func}>Editar</button>

        if (id.includes("deletar"))
        return <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={func}>Excluir</button>
    }

    return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{obj.nome}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {objsProps(props, obj, true)}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    {btn()}
                </div>
            </div>
        </div>
    </div>
    );
}

export default modal;