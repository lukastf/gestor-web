

/*const postOneBase = require("../base/post/postOneBase");
const putOneBase = require("../base/put/putOneBase");
const deleteOneBase = require("../base/delete/deleteOneBase");
const getManyBase = require("../base/get/getManyBase");
const getManyBasePagination = require("../base/get/getManyBasePagination");*/

const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const Usuario = require('../principais/Usuario');
const dm = new DirectMongo(connection);
const collection = "tiposCartao";


class TipoCartao {

    constructor(props, params) {

        this.tipoCartao = {};

        this.tipoCartao._id = props._id;
        this.tipoCartao.nome = props.nome;
        this.tipoCartao.idOrg = props.idOrg;

        this.tipoCartao.dataAtualizacao = new Date();

        this.params = params;
        //this.checkUsuario = Usuario.checkUsuario(params);
        //this.checkUsuarioAdmin = Usuario.checkUsuarioAdmin(params);
    }
    

    static async get (params) {

        const checkUsuario = await Usuario.checkUsuario(params);
        
        if(checkUsuario) return dm.getMany(collection, params);
        else return null;
    }

    static async getPages (params) {

        const checkUsuario = await Usuario.checkUsuario(params);

        if(checkUsuario) return dm.getManyPagination(collection, params);
        else return null;
    }

    async post () {

        this.tipoCartao.dataCadastro = new Date();

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if (checkUsuarioAdmin) return dm.postOne(collection, this.tipoCartao);
        else return null;
    }

    async put () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if (checkUsuarioAdmin) return dm.putOne(collection, this.tipoCartao);
        else return null;
    }

    async delete () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if(checkUsuarioAdmin) return dm.deleteOne(collection, this.tipoCartao);
        else return null;
    }
}

module.exports = TipoCartao;