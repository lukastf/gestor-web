import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
//import '@popperjs/core';
//import $ from 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './navbar/Navbar';
import Fornecedores from './fornecedores/Fornecedores';
import Login from './usuario/Login';
import { serverUrl } from './navbar/server';
import Axios from 'axios';

const App = () => {

  const [route, setRoute] = useState();

  const [isLogado, setIsLogado] = useState(false);
  const [usuario, setUsuario] = useState("");

  const setUrl = (link) => {
    window.history.pushState(null, null, link);
  }
    
  let props = {

    route: route,
    setRoute: setRoute,
    setUrl: setUrl,

    isLogado: isLogado,
    setIsLogado: setIsLogado,

    usuario: usuario,
    setUsuario: setUsuario,

    objEnvio: {}
  }

  const [execOneTime, setExecOneTime] = useState(false);
  if (!execOneTime) {

    setExecOneTime(true);

    setRoute(<Login props={props}/>);

    let obj = {
      email: localStorage.email,
      senha: localStorage.senha
    }

    Axios.post(serverUrl + '/login', obj)
    .then((response) => {

      setUsuario(response.data);
      props.usuario = response.data;

      setIsLogado(true);
      setUrl("/fornecedores");
      setRoute(<Fornecedores props={props}/>);
    });
  }

  return (
    <>
      <Navbar props={props}/>
      {route}
    </>
  );
}

export default App;
