
import React from 'react';

const titulosColunas = (props) => {

    let result = [];

    for(let i = 0; i < props.titulosColunas.length; i++) {
        
        result.push(<th key={i} scope="col"> {props.titulosColunas[i]} </th>);
    }

    result.push(<th key={props.titulosColunas.length} scope="col"></th>)

    return result;
}

export default titulosColunas;