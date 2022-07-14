
import React, { useState } from 'react';
import axios from 'axios';

import Fornecedores from '../fornecedores/Fornecedores';
import { serverUrl } from '../navbar/server';

const Login = (props) => {

    props = props.props;

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [loginResult, setLoginResult] = useState();

    const enviarBtn = (e) => {

        e.preventDefault();

        let obj = {
            email: email,
            senha: senha
        }

        axios.post(serverUrl + '/login', obj)
        .then((response) => {

            setLoginResult();
            props.setIsLogado(true);
            //props.refreshConta();

            props.setUrl("/fornecedores");
            props.setRoute(<Fornecedores props={props}/>);

            props.setUsuario(response.data);
            /*
            props.setId(response.data._id);
            props.setEmail(response.data.email);
            props.setSenha(response.data.senha);
            props.setMaster(response.data.master);*/

            localStorage.email = response.data.email;
            localStorage.senha = response.data.senha;
        })
        .catch((error) => {

            setLoginResult(
                <div className="text-center mt-3">
                    <p style={{color: "red"}}>Erro ao efetuar login</p>
                </div>
            );
        });
    }

    return (
        <div className="container-fluid p-4 col-12 col-md-4">
            <div className="">
                <h3 className="jumbotron titulo-tabela">
                    Login
                </h3>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email" 

                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="senha" 
                        placeholder="Senha"
                        
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={enviarBtn}>Enviar</button>
                </div>

                {loginResult}
            </form>
        </div>
    );
}

export default Login;
