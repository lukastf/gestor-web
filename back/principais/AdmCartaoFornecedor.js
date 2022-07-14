
const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const Usuario = require('../principais/Usuario');
const dm = new DirectMongo(connection);
const collection = "admCartaoFornecedores";


class AdmCartaoFornecedor {

    constructor(props, params) {

        this.obj = {};

        this.obj._id = props._id;
        this.obj.fornecedor = props.fornecedor;
        this.obj.tipoCartao = props.tipoCartao;
        this.obj.taxaAdm = props.taxaAdm;
        this.obj.verTaxa = props.verTaxa;
        this.obj.verTipoCartao = props.verTipoCartao;
        this.obj.tipoPagamento = props.tipoPagamento;
        
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

        if (this.checkUsuarioAdmin) return dm.postOne(collection, this.obj);
        else return null;
    }

    put () {

        if (this.checkUsuarioAdmin) return dm.putOne(collection, this.obj);
        else return null;
    }

    delete () {

        if(this.checkUsuarioAdmin) return dm.deleteOne(collection, this.obj);
        else return null;
    }
}

module.exports = AdmCartaoFornecedor;