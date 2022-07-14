
import React from 'react';

const OrdemDeServico = (props) => {

    const tdsOrdServ = (e) => {

        e.preventDefault();

        props.setUrl("/todasOrdensDeServico");
        props.setRoute();
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
                Ordem de Serviço
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                <button 
                    type="button" 
                    className="dropdown-item btn" 
                    onClick={tdsOrdServ}
                >
                    Todas Ordem de Serviço 
                </button>

                <button type="button" className="dropdown-item btn"> Ordem de Serviço Finalizada </button>

                <button type="button" className="dropdown-item btn"> Ordem de Serviço em Aberto </button>
            </div>
        </li>
    );
}

export default OrdemDeServico;