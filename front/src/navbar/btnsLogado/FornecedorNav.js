
import React from 'react';
import Fornecedores from "../../fornecedores/Fornecedores";

const FornecedorNav = (props) => {

    props = props.props;

    const click = (e) => {

        e.preventDefault();

        props.setUrl("/fornecedores");
        props.setRoute(<Fornecedores props={props}/>);
    }

    return (
        <li className="nav-item">
            <button className="nav-link btn" onClick={click}> Fornecedor </button>
        </li>
    );
}

export default FornecedorNav;