
import React, { useState } from 'react';

const Estado = (props) => {

    let index = props.index;
    props = props.props;

    const [estado, setEstado] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        props.objEnvio.endereco[index].setEstado = setEstado;
        
        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.endereco[index].estado = props.editarObj.endereco[index].estado;
            setEstado(props.editarObj.endereco[index].estado);
        }
    }

    const changeEstado = e => {
        
        setEstado(e.target.value);
        props.objEnvio.endereco[index].estado = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <select id="estado" className="form-control" value={estado} onChange={changeEstado}>
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
}

export default Estado;