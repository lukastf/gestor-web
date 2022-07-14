
import React, { useState } from 'react';

const Email = (props) => {

    props = props.props;

    const [email, setEmail] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj)
        setEmail(props.editarObj.email);
    }

    const changeEmail = (e) => {

        setEmail(e.target.value);
        props.objEnvio.email = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="" 
                value={email}
                onChange={changeEmail}
            />
        </div>
    );
}

export default Email;