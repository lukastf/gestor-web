
import React from 'react';

import TipoPessoa from '../inputs/dados/TipoPessoa';
import RazaoSocial from '../inputs/dados/RazaoSocial';
import NomeFantasia from '../inputs/dados/NomeFantasia';
import CnpjOuCpf from '../inputs/dados/CnpjOuCpf';
import InscricaoEstadualOuRg from '../inputs/dados/InscricaoEstadualOuRg';
//import RamoDeAtividade from '../fomDados/RamoDeAtividade';

const FornecedorFormDados = (props) => {
    props = props.props;

    return (
        <>
        <TipoPessoa props={props}/>
        <RazaoSocial props={props}/>
        <NomeFantasia props={props}/>
        <CnpjOuCpf props={props}/>
        <InscricaoEstadualOuRg props={props}/>
        </>
    );
}

export default FornecedorFormDados;