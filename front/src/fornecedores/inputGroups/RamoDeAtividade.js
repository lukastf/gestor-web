import React, { useState } from 'react';
import RamoDeAtividadeBase from '../inputs/ramoDeAtividade/RamoDeAtividadeBase';

const RamoDeAtividade = (props) => {

    props = props.props;

    const [ramosAdicionados, setRamosAdicionados] = useState([]);
    const [ramosAdicionadosRender, setRamosAdicionadosRender] = useState([]);
    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        props.objEnvio.ramoAtividade = [];
    }

    const adicionar = () => {

        let temp = ramosAdicionados;
        let index = ramosAdicionados.length + 1;

        temp.push(
            <div key={index} className="form-group">
                {<RamoDeAtividadeBase index={index} props={props}/>}
            </div>
        );

        setRamosAdicionados(temp);
        setRamosAdicionadosRender(<div>{ramosAdicionados}</div>);
    }

    const remover = () => {

        let temp = ramosAdicionados;
        temp.pop();

        setRamosAdicionados(temp);
        setRamosAdicionadosRender(<div>{ramosAdicionados}</div>);
        
        props.objEnvio.ramoAtividade.pop();
    }

    const btnRemover = () => {

        if (ramosAdicionados.length > 0) {
            return <button className="btn btn-danger mt-3" type="button" onClick={remover}> Remover </button>
        }

        return "";
    }

    return(
        <>
        <div className="form-group">
            <label htmlFor="ramoAtividade">Ramo de Atividade</label>
            <RamoDeAtividadeBase index={0} props={props}/>
            <button className="btn btn-primary mt-3 mr-4" type="button" onClick={adicionar}> Adicionar Ramo de Atividade </button>
            {btnRemover()}
        </div>
        {ramosAdicionadosRender}
        </>
    );
}

export default RamoDeAtividade;