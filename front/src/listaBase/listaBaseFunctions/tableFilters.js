
import React from 'react';
import pesquisar from './pesquisar';

const tableFilters = (props) => {

    const pesquisarHandler = (e) => {
    
        let val = e.target.value;
        if (val === "") val = "$";
    
        props.search = val;
        pesquisar(props);
    }

    let filtros = [];

    if (typeof props.filtros === "undefined") return;

    for (let i = 0; i < props.filtros.length; i++) {

        if (props.filtros[i] === "dataInicial") {

            filtros.push(
            <div key={i} className="form-group col-12 col-md-2">
                <label>Data Inicial</label>
                <input type="text" className="form-control" placeholder="dd/mm/aaaa"/>
            </div>
            );
        }

        if (props.filtros[i] === "dataFinal") {

            filtros.push(
            <div key={i} className="form-group col-12 col-md-2">
                <label>Data Final</label>
                <input type="text" className="form-control" placeholder="dd/mm/aaaa"/>
            </div>
            );
        }

        if (props.filtros[i] === "localidade") {

            filtros.push(
            <div className="form-group col-12 col-md-2">
                <label>Estado</label>
                <select id="estado" className="form-control" value={props.estado} //onChange={changeEstado}
                >
                    <option value="">Escolha um Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>
            );

            filtros.push(
            <div className="form-group col-12 col-md-2">
                <label>Data Final</label>
                <input type="text" className="form-control" placeholder="dd/mm/aaaa"/>
            </div>
            );
        }

        if (props.filtros[i] === "consultor") {

            filtros.push(
            <div key={i} className="form-group col-12 col-md-2">
                <label>Data Final</label>
                <input type="text" className="form-control" placeholder="dd/mm/aaaa"/>
            </div>
            );
        }

        if (props.filtros[i] === "pesquisar") {

            filtros.push(
            <div key={i} className="form-group col-12 col-md-2">
                <label>Pesquisar</label>
                <input type="text" className="form-control" placeholder="pesquisar" onChange={pesquisarHandler}/>
            </div>
            );
        }
    }

    return(
    <div className="row my-3">
        {filtros}
    </div>);
}

export default tableFilters;