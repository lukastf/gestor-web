
import React from 'react';
import Telefone from '../inputs/contato/Telefone';
import Celular from '../inputs/contato/Celular';
import Contato from '../inputs/contato/Contato';
import Email from '../inputs/contato/Email';
//import Ddd from './formContato/Ddd';

const FornecedorFormContato = (props) => {
    props = props.props;

    return (
        <>
        {/*<div className="row">
            <Ddd props={props}/>*/}
            <Telefone props={props}/>
        {/*</div>*/}
        <Celular props={props}/>
        <Contato props={props}/>
        <Email props={props}/>
        </>
    );
}

export default FornecedorFormContato;