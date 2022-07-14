
import React from 'react';
import Login from '../../usuario/Login';
import UsuarioForm from '../../usuario/UsuarioForm';

const Conta = (props) => {

    props = props.props;

    const alterarDados = (e) => {

        e.preventDefault();

        props.setUrl("/alterarMeusDados");
        props.editarObj = props.usuario;
        props.setRoute(<UsuarioForm props={props}/>);
    }

    const sair = (e) => {

        e.preventDefault();

        props.setUrl("/login");
        props.setRoute(<Login props={props}/>);
        localStorage.email = null;
        localStorage.senha = null;
        props.setIsLogado(false);

    }

    const navStyle = () => {

        if (
            props.usuario.tipoUsuario !== "Administrador" && 
            props.usuario.tipoUsuario !== "Administrador Master"
        ) 
        return "conta-nav-style3";

        return "conta-nav-style";
    }
    
    return(
        <li className={"nav-item dropdown " + navStyle()}>
            <button 
                className="nav-link dropdown-toggle btn" 
                id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                Conta
            </button>
            <div className="dropdown-menu conta-nav-style2" aria-labelledby="navbarDropdownMenuLink">
                <button type="button" className="dropdown-item btn" onClick={alterarDados}> Alterar meus dados </button>
                <button type="button" className="dropdown-item btn" onClick={sair}> Sair </button>
            </div>
        </li>
    );
}

export default Conta;