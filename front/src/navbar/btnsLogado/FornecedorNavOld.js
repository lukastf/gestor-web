
import React from 'react';
import Fornecedores from '../../fornecedores/fornecedores/Fornecedores';
import Tecnologias from '../../fornecedores/tecnologias/Tecnologias';
import AdmCartaoFornecedor from '../../fornecedores/admCartaoFornecedor/AdmCartaoFornecedor';

const FornecedorNav = (props) => {

    props = props.props;

    const fornecedoresClick = (e) => {

        e.preventDefault();

        props.setUrl("/fornecedores");
        props.setRoute(<Fornecedores props={props}/>);
    }

    const tecnologiasClick = (e) => {

        e.preventDefault();

        props.setUrl("/tecnologias");
        props.setRoute(<Tecnologias props={props}/>);
    }

    const admCartaoClick = (e) => {

        e.preventDefault();

        props.setUrl("/administracaoCartaoFornecedor");
        props.setRoute(<AdmCartaoFornecedor props={props}/>);
    }

    return (
        <li className="nav-item dropdown">
            <button 
                className="nav-link dropdown-toggle btn" 
                id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                Fornecedor
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <button type="button" className="dropdown-item btn" onClick={fornecedoresClick}> Fornecedor </button>
                <button type="button" className="dropdown-item btn" onClick={tecnologiasClick}> Tecnologia </button>
                <button type="button" className="dropdown-item btn" onClick={admCartaoClick}> Administarção de Cartão do Fornecedor </button>
            </div>
        </li>
    );
}

export default FornecedorNav;