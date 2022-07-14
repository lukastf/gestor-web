import React, { useState } from 'react';
import TipoDocumento from './tecnologias/form/TipoDocumento';
import TipoOperacao from './tecnologias/form/TipoOperacao';
import DataInicio from './tecnologias/form/DataInicio';
import Valor from './tecnologias/form/Valor';
import Observacao from './tecnologias/form/Observacao';
import Frequencia from './tecnologias/form/Frequencia';
import DataFim from './tecnologias/form/DataFim';


const AgendaBase = (props) => {

    let index = props.index;
    props = props.props;

    if (typeof props.objEnvio.agenda[index] === "undefined") props.objEnvio.agenda[index] = {};

    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        //if(props.editarObj) setRamoAtividade(props.editarObj.adminCartao[index]);
    }

    return(
    <div>
        <div>
            <h3 className="jumbotron titulo-tabela">
                Tecnologia/Agenda
            </h3>
        </div>
        <TipoDocumento index={index} props={props}/>
        <TipoOperacao index={index} props={props}/>
        <DataInicio index={index} props={props}/>
        <DataFim index={index} props={props}/>
        <Valor index={index} props={props}/>
        <Frequencia index={index} props={props}/>
        <Observacao index={index} props={props}/>
    </div>
    );
}

export default AgendaBase;