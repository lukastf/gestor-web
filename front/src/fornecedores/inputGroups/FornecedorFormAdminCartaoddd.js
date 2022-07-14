
import React from 'react';

import TipoCartao from "../../admCartaoFornecedor/form/TipoCartao";
import TaxaAdministrativa from "../../admCartaoFornecedor/form/TaxaAdministrativa";
import VerTaxa from "../../admCartaoFornecedor/form/VerTaxa";
import VerTipoCartao from "../../admCartaoFornecedor/form/VerTipoCartao";
import TipoPagamento from "../../admCartaoFornecedor/form/TipoPagamento";


const FornecedorFormAdminCartao = (props) => {

    props= props.props;

    return(
        <>
        <div className="">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                   Adm de Cartão
                </h3>
            </div>
            <TipoCartao props={props}/>
            <TaxaAdministrativa props={props}/>
            <VerTaxa props={props}/>
            <VerTipoCartao props={props}/>
            <TipoPagamento props={props}/>
        </div>
        </>
    );
}

export default FornecedorFormAdminCartao;