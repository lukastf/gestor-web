
import React from 'react';
import Login from '../usuario/Login';

const usuarioDeslogado = (props) => {

    //console.log(props);

    const click = (e) => {

        e.preventDefault();

        props.setUrl("/login");
        props.setRoute(<Login props={props} />);
    }

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <button type="button" className="nav-link btn" onClick={click}>Login</button>
            </li>
        </ul>
    )
}

export default usuarioDeslogado;