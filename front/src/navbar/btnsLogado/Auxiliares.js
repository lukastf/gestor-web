
import React from 'react';

import Bancos from '../../auxiliares/bancos/Bancos';
import RamosAtividade from '../../auxiliares/ramosAtividade/RamosAtividade';
import TiposOperacao from '../../auxiliares/tiposOperacao/TiposOperacao';
import TiposDocumento from '../../auxiliares/tiposDocumento/TiposDocumento';
import TiposCartao from '../../auxiliares/tiposCartao/TiposCartao';
import Origens from '../../auxiliares/origens/Origens';
import TiposPagamento from '../../auxiliares/tiposPagamento/TiposPagamento';

const Auxiliares = (props) => {

    props = props.props;

    const bancoClick = (e) => {

        e.preventDefault();

        props.setUrl("/bancos");
        props.setRoute(<Bancos props={props}/>);
    }

    const ramoClick = (e) => {

        e.preventDefault();

        props.setUrl("/ramosAtividade");
        props.setRoute(<RamosAtividade props={props}/>);
    }

    const tipoOpClick = (e) => {

        e.preventDefault();

        props.setUrl("/tiposOperacao");
        props.setRoute(<TiposOperacao props={props}/>);
    }

    const tipoDocClick = (e) => {

        e.preventDefault();

        props.setUrl("/tiposDocumento");
        props.setRoute(<TiposDocumento props={props}/>);
    }

    const tipoCardClick = (e) => {

        e.preventDefault();

        props.setUrl("/tiposCartao");
        props.setRoute(<TiposCartao props={props}/>);
    }

    const origemClick = (e) => {

        e.preventDefault();

        props.setUrl("/origens");
        props.setRoute(<Origens props={props}/>);
    }

    const tipoPagClick = (e) => {

        e.preventDefault();

        props.setUrl("/tiposPagamento");
        props.setRoute(<TiposPagamento props={props}/>);
    }
    
    return(
        <li className="nav-item dropdown">
            <button 
                className="nav-link dropdown-toggle btn" 
                id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                Auxiliares
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <button type="button" className="dropdown-item btn" onClick={bancoClick}> Banco </button>
                <button type="button" className="dropdown-item btn" onClick={ramoClick}> Ramos de Atividade </button>
                <button type="button" className="dropdown-item btn" onClick={tipoOpClick}> Tipo de Operação </button>
                <button type="button" className="dropdown-item btn" onClick={tipoDocClick}> Tipo de Documento </button>
                <button type="button" className="dropdown-item btn" onClick={tipoCardClick}> Tipo de Cartão </button>
                <button type="button" className="dropdown-item btn" onClick={origemClick}> Origem </button>
                <button type="button" className="dropdown-item btn" onClick={tipoPagClick}> Tipo de Pagamento </button>
            </div>
        </li>
    );
}

export default Auxiliares;