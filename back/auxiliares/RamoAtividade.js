
/*const postOneBase = require("../base/post/postOneBase");
const putOneBase = require("../base/put/putOneBase");
const deleteOneBase = require("../base/delete/deleteOneBase");
const getManyBase = require("../base/get/getManyBase");
const getManyBasePagination = require("../base/get/getManyBasePagination");*/

const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const Usuario = require('../principais/Usuario');
const dm = new DirectMongo(connection);
const collection = "ramosAtividade";


class RamoAtividade {

    constructor(props, params) {

        this.ramoAtividade = {};

        this.ramoAtividade._id = props._id;
        this.ramoAtividade.nome = props.nome;
        this.ramoAtividade.idOrg = props.idOrg;

        this.ramoAtividade.dataAtualizacao = new Date();

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

        this.ramoAtividade.dataCadastro = new Date();

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if (checkUsuarioAdmin) return dm.postOne(collection, this.ramoAtividade);
        else return null;
    }

    async put () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if (checkUsuarioAdmin) return dm.putOne(collection, this.ramoAtividade);
        else return null;
    }

    async delete () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if(checkUsuarioAdmin) return dm.deleteOne(collection, this.ramoAtividade);
        else return null;
    }
}

module.exports = RamoAtividade;