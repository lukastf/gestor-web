import React, { useState } from 'react';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './Paginacao.module.css';

const Paginacao = (props) => {

    let url = props.url;
    let atualizarObjs = props.atualizarObjs;
    let changePageId = props.changePageId;

    const [pagina, setPagina] = useState(0);
    const [paginas, setPaginas] = useState([]); 

    props = props.props;

    const [listaPaginacao, setListaPaginacao] = useState([]);

    const changePaginacao = (pagina, paginas) => {

        let displayPaginacao = [];
        let listaPaginacao = [];   

        for(let i = 0; i < paginas.length; i++) {

            let activePaginacao = "";

            displayPaginacao[i] = "d-none";

            if ( 
                i === 0 ||
                i === pagina -3 ||
                i === pagina -2 || 
                i === pagina -1 ||
                i === pagina || 
                i === pagina + 1 || 
                i === pagina + 2 ||
                i === pagina + 3 ||
                i === paginas.length - 1
            ) {

                displayPaginacao[i] = "";

                if (i === pagina) {
                    activePaginacao = "active";
                }

            }

            listaPaginacao.push(
                <li key={i} className={"page-item "+ activePaginacao + " " + displayPaginacao[i]}>
                    <button className={"page-link"}
                        onClick={changePage} id={"pagina"+ i} >
                        {i+1}
                    </button>
                </li>
            );
        }

        setListaPaginacao(listaPaginacao);
    }

    const getPaginas = async () => {

        try {

            let paginas = await axios.get(url);
            return paginas.data;

        } catch (e) {
            console.log(e);
            return null;
        }
    }

    const changePage = async(e) => {

        e.preventDefault();

        let pgs = paginas;
        let p = parseInt(e.target.id.split("pagina")[1]);

        if (paginas.length === 0) pgs = await getPaginas();
        
        setPagina(p);

        props.pageId = pgs[p];

        changePaginacao(p, pgs);
        atualizarObjs(props);
        changePageId(pgs[p]);
    }

    const setaLeft = (e) => {

        e.preventDefault();

        if(pagina === 0 ) {
            return;
        }

        //paginas = pgs;
        //pagina = pagina - 1;

        let p = pagina;
        p = p - 1;
        setPagina(p);

        props.pageId = paginas[p];

        changePaginacao(p, paginas);
        atualizarObjs(props);
        changePageId(paginas[p]);
    }

    const setaRight = (e) => {

        e.preventDefault();

        if(pagina === paginas.length -1 ) {
            return;
        }

        let p = pagina;
        p = p + 1;
        setPagina(p);

        props.pageId = paginas[p];

        changePaginacao(p, paginas);
        atualizarObjs(props);
        changePageId(paginas[p]);
    }

    
    const ininicializar = async () => {

        let paginas = await getPaginas();
        setPaginas(paginas);

        props.pageId = paginas[0];

        changePaginacao(0, paginas);
        atualizarObjs(props);
        changePageId(paginas[0]);
    }

    const [check, setCheck] = useState(false);

    if (!check) {

        setCheck(true);
        ininicializar();
    }

    return(
        <nav className="mt-5">
            <ul className="row pagination justify-content-center">

                <li className="page-item d-none d-md-block">
                    <button className="page-link" tabIndex="-1" style={{padding: "0.23rem"}}>
                        <FontAwesomeIcon 
                            onClick={setaLeft}
                            className={"btn icone-principal " + styles.setasImg} 
                            icon={faArrowCircleLeft} />
                    </button>
                </li>

                {listaPaginacao}

                <li className="page-item d-none d-md-block">
                    <button className="page-link" style={{padding: "0.23rem"}}>
                        <FontAwesomeIcon 
                            onClick={setaRight}
                            className={"btn icone-principal " + styles.setasImg}
                            icon={faArrowCircleRight} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Paginacao;

