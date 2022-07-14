
const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const Usuario = require('./Usuario');
const dm = new DirectMongo(connection);
const collection = "tecnologias";

class Tecnologia {

    constructor(props) {

        this.obj = {};

        this.obj._id = props._id;
        this.obj.fornecedor = props.fornecedor;
        this.obj.tipoDocumento = props.tipoDocumento;
        this.obj.tipoOperacao = props.tipoOperacao;
        this.obj.dataInicio = props.dataInicio;
        this.obj.valor = props.valor;
        this.obj.frequencia = props.frequencia;
        this.obj.observacao = props.observacao;
        
        this.obj.dataAtualizacao = new Date();

        this.checkUsuario = Usuario.checkUsuario(params);
        this.checkUsuarioAdmin = Usuario.checkUsuarioAdmin(params);
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

    post () {

        this.obj.dataCadastro = new Date();

        if(this.checkUsuarioAdmin) return dm.postOne(collection, this.obj);
        else return null;
    }

    put () {

        if(this.checkUsuarioAdmin) return dm.putOne(collection, this.obj);
        else return null;
    }

    delete () {

        if(this.checkUsuarioAdmin) return dm.deleteOne(collection, this.obj);
        else return null;
    }
}

module.exports = Tecnologia;