import React, { useState } from 'react';
import NumeroLogico from './inputs/NumeroLogico';
import Origem from './inputs/Origem';


const NumeroLogicoBase = (props) => {

    let index = props.index;
    props = props.props;

    if (typeof props.objEnvio.numeroLogico[index] === "undefined") props.objEnvio.numeroLogico[index] = {};

    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        //if(props.editarObj) setRamoAtividade(props.editarObj.adminCartao[index]);
    }

    return(
    <div>
        <div>
            <h3 className="jumbotron titulo-tabela">
                Numero Logico
            </h3>
        </div>
        <NumeroLogico index={index} props={props}/>
        <Origem index={index} props={props}/>
    </div>
    );
}

export default NumeroLogicoBase;