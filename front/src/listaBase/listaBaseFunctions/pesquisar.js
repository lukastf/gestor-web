import { serverUrl } from "../../navbar/server";
import listar from './listar';
import Axios from "axios";

const pesquisar = (props) => {

    props.setPaginacaoRender("");

    let propSearch = "nome";
    if (props.url === "/fornecedores") propSearch = "nomeFantasia";

    Axios.get(

        serverUrl + 
        props.url +
        '/' + props.usuario._id +
        '/' + props.itensPage +
        '/ '+ propSearch +
        '/' + props.search

    ).then((res) => {

        props.pageId = res.data[0];

        listar(props);

    }).catch((err) => {

        console.log(err);
    });
}

export default pesquisar;