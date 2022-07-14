/*const postOneBase = require("../base/post/postOneBase");
const putOneBase = require("../base/put/putOneBase");
const deleteOneBase = require("../base/delete/deleteOneBase");
const getManyBase = require("../base/get/getManyBase");
const getManyBasePagination = require("../base/get/getManyBasePagination");
const getOneBase = require('../base/get/getOneBase');*/

const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const dm = new DirectMongo(connection);
const collection = "usuarios";

class Usuario {

    constructor (usuario, params) {

        this.usuario = {

            _id: usuario._id,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
            cpf: usuario.cpf,
            cepInicial: usuario.cepInicial,
            cepFinal: usuario.cepFinal,
            tipoUsuario: usuario.tipoUsuario,
            status: usuario.status,
            idOrg: usuario.idOrg,
            
            dataAtualizacao: new Date()
        };

        this.params = params;
        //this.checkUsuario = Usuario.checkUsuario(params);
        //this.checkUsuarioAdmin = Usuario.checkUsuarioAdmin(params);
    }

    static async checkUsuario (params) {

        params._id = params.idAllow;
        return await dm.getOne(collection, params);
    }

    static async checkUsuarioAdmin (params) {

        params._id = params.idAllow;
        let usuario = await dm.getOne(collection, params);

        if (usuario.tipoUsuario === "Administrador" || usuario.tipoUsuario === "Administrador Master") return usuario;
        else return null; 
    }

    static async get (params) {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(params);
        
        if(checkUsuarioAdmin) return dm.getMany(collection, params);
        else return null;
    }

    static async getPages (params) {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(params);

        if(checkUsuarioAdmin) return dm.getManyPagination(collection, params);
        else return null;
    }

    async post () {

        this.usuario.dataCadastro = new Date();
        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if (checkUsuarioAdmin) return dm.postOne(collection, this.usuario);
        else return null;
    }

    async put () {

        let put = false;

        if (this.params.idAllow == this.usuario._id) put = true;
        else {

            let checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);
            if (checkUsuarioAdmin) put = true;
        }


        if(put) return dm.putOne(collection, this.usuario);
        else return null;

        //const checkUsuario = await Usuario.checkUsuario(this.params);
        /*const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if (checkUsuarioAdmin) {

            /*if (checkUsuario.tipoUsuario !== "Administrador" && checkUsuario.tipoUsuario !== "Administrador Master") {
                
                this.usuario.tipoUsuario = checkUsuario.tipoUsuario;
                this.usuario.status = checkUsuario.status;
                this.usuario.idOrg = checkUsuario.idOrg;
            }

            return dm.putOne(collection, this.usuario);
        }
        else return null;*/
    }

    async delete () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if(checkUsuarioAdmin) return dm.deleteOne(collection, this.usuario);
        else return null;
    }
}

module.exports = Usuario;