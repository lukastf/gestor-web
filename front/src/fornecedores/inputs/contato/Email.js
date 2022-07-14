
import React, { useState } from 'react';

const Email = (props) => {

    props = props.props;

    const [email, setEmail] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.email = props.editarObj.email;
            setEmail(props.editarObj.email);
        }
    }

    const changeEmail = e => {

        setEmail(e.target.value);
        props.objEnvio.email = e.target.value;
    }

    return(
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={email} 
                onChange={changeEmail} 
            />
        </div>
    );
}

export default Email;