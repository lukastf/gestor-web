
import React, { useState } from 'react';

const IdOrg = (props) => {

    props = props.props;

    const [idOrg, setIdOrg] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setIdOrg(props.editarObj.idOrg);
    }

    const changeIdOrg = (e) => {

        setIdOrg(e.target.value);
        props.objEnvio.idOrg = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="idOrg">Id da Org</label>
            <input 
                type="text" 
                className="form-control" 
                id="idOrg" 
                placeholder="" 
                value={idOrg}
                onChange={changeIdOrg} 
            />
        </div>
    );
}

export default IdOrg;