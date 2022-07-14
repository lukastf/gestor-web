import React from 'react';

const objsProps = (props, obj, visualizarObj = false) => {

    //console.log(props.vendedores);

    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let result = [];

    for (let i = 0; i < keys.length; i++) {

        let excluirCol = false;

        if (typeof props.excluirColuna != "undefined" && !visualizarObj){

            for (let index = 0; index < props.excluirColuna.length; index++) {

                if (keys[i] === props.excluirColuna[index]) excluirCol = true;
            }
        }

        if (
            keys[i] === "ramoAtividade" ||
            keys[i] === "adminCartao" ||
            keys[i] === "agenda" ||
            keys[i] === "numeroLogico" ||
            keys[i] === "endereco"
        )
        {
            continue;
        }

        if (keys[i] === "dataCadastro" || keys[i] === "dataAtualizacao") {

            let d = new Date(values[i]);
            let data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " "
            + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            values[i] = data;
        }

        if (!excluirCol && !visualizarObj) {

            if (keys[i] === "vendedor") {

                for (let j = 0; j < props.vendedores.length; j++) {

                    if(parseInt(props.vendedores[j].idOrg) === parseInt(values[i])) 
                        result.push(<td key={i}>{props.vendedores[j].nome}</td>);
                }

                //result.push(<td key={i}>"dd"</td>);
            }
            else
                result.push(<td key={i}>{values[i]}</td>);
        }

        if(visualizarObj)
        result.push(<p key={i}><b>{keys[i]}</b> {values[i]}</p>);
    }

    return result;
}

export default objsProps;