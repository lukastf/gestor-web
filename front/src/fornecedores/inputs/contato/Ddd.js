
import React, { useState } from 'react';

const Ddd = (props) => {

    props = props.props;

    const [ddd, setDdd] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {
            props.objEnvio.ddd = props.editarObj.ddd;
            setDdd(props.editarObj.ddd);
        }
    }

    const changeDdd = e => {
        setDdd(e.target.value);
        props.objEnvio.ddd = e.target.value;
    }

    return (
        <div className="form-group col-3">
            <label htmlFor="ddd">DDD</label>
            <input 
                id="ddd"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={ddd} 
                onChange={changeDdd} 
            />
        </div>
    );
}

export default Ddd;