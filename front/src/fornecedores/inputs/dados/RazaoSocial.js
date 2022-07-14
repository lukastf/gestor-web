
import React, { useState }  from 'react';

const RazaoSocial = (props) => {

    props = props.props;

    const [razaoSocial, setRazaoSocial] = useState("");
    const [check, setCheck] = useState(false);

    if(!check) {

        setCheck(true);
        if(props.editarObj) {

            props.objEnvio.razaoSocial = props.editarObj.razaoSocial;
            setRazaoSocial(props.editarObj.razaoSocial);
        }
    }

    const changeRazaoSocial = e => {

        setRazaoSocial(e.target.value); 
        props.objEnvio.razaoSocial = e.target.value;
    }

    return (
        <div className="form-group">
            <label htmlFor="razaoSocial">Razão Social</label>
            <input 
                id="razaoSocial"
                type="text" 
                className="form-control" 
                placeholder="" 
                value={razaoSocial} 
                onChange={changeRazaoSocial} 
            />
        </div>
    );
}

export default RazaoSocial;