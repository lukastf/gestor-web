
import React from 'react';

import Banco from '../inputs/banco/Banco';
import NumeroAgencia from '../inputs/banco/NumeroAgencia';
import NumeroConta from '../inputs/banco/NumeroConta';
import NomeConta from '../inputs/banco/NomeConta';
import TipoConta from '../inputs/banco/TipoConta';
import BancoCnpjOuCpf from '../inputs/banco/BancoCnpjOuCpf';
import ValorDocumento from '../inputs/banco/ValorDocumento';
import TaxaAdesao from '../inputs/banco/TaxaAdesao';
import Observacao from '../inputs/banco/Observacao';
import SelectConsultor from '../inputs/banco/SelectConsultor';
import DiaPagamento from '../inputs/banco/DiaPagamento';
//import NumeroLogico from '../formBanco.js/NumeroLogico';
//import Origem from '../formBanco.js/Origem';

const FornecedorFormBanco = (props) => {
    props = props.props;
    
    return (
        <>
        <Banco props={props}/>
        <NumeroAgencia props={props}/>
        <NumeroConta props={props}/>
        <TipoConta props={props}/>
        <ValorDocumento props={props}/>
        <BancoCnpjOuCpf props={props}/>
        <NomeConta props={props}/>
        <SelectConsultor props={props}/>
        <DiaPagamento props={props} />
        <TaxaAdesao props={props}/>
        <Observacao props={props}/>
        {/*<NumeroLogico props={props}/>
        <Origem props={props}/>*/}
        </>
    );
}

export default FornecedorFormBanco;