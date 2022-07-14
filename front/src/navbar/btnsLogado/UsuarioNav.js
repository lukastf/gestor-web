
import React from 'react';
import Usuarios from "../../usuario/Usuarios";

const UsuarioNav = (props) => {

    props = props.props;

    const usuariosClick = (e) => {

        e.preventDefault();

        props.setUrl("/usuarios");
        props.setRoute(<Usuarios props={props}/>);
    }

    return (
        <li className="nav-item">
            <button className="nav-link btn" onClick={usuariosClick}> Usuario </button>
        </li>
    );
}

export default UsuarioNav;