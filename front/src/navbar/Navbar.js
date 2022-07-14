
import React from 'react';

import usuarioDeslogado from './usuarioDeslogado';
import usuarioLogado from './usuarioLogado';

const Navbar = (props) => {

    props = props.props;

    const checkUsuarioLogado = () => {
        
        if (props.isLogado) 
        return usuarioLogado(props);
        return usuarioDeslogado(props);
    }

    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-brand btn"> <img src="./logo.png" alt="logo" style={{width: "7rem"}}/> </button>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {checkUsuarioLogado()}
        </div>
    </nav>
    );
}

export default Navbar;