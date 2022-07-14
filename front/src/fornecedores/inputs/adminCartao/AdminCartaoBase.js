import React, { useState } from 'react';
import TipoCartao from './admCartaoFornecedor/form/TipoCartao';
import TaxaAdministrativa from './admCartaoFornecedor/form/TaxaAdministrativa';
//import VerTaxa from './admCartaoFornecedor/form/VerTaxa';
//import VerTipoCartao from './admCartaoFornecedor/form/VerTipoCartao';
import TipoPagamento from './admCartaoFornecedor/form/TipoPagamento';

const AdminCartaoBase = (props) => {

    let index = props.index;
    props = props.props;

    if (typeof props.objEnvio.adminCartao[index] === "undefined") props.objEnvio.adminCartao[index] = {};

    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        //if(props.editarObj) setRamoAtividade(props.editarObj.adminCartao[index]);
    }

    return(
    <div>
        <div>
            <h3 className="jumbotron titulo-tabela">
                Adm de Cartão
            </h3>
        </div>
        <TipoCartao index={index} props={props}/>
        <TaxaAdministrativa index={index} props={props}/>
        {/*<VerTaxa index={index} props={props}/>
        <VerTipoCartao index={index} props={props}/>*/}
        <TipoPagamento index={index} props={props}/>
    </div>
    );
}

export default AdminCartaoBase;