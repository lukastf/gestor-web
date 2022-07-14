
var Client = require('ftp');
const fs = require('fs');

const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const Usuario = require('./Usuario');
const dm = new DirectMongo(connection);
const collection = "fornecedores";


class Fornecedor {

    constructor(fornecedor, params) {

        this.fornecedor = Fornecedor.getFornecedor(fornecedor);

        this.fornecedor.dataAtualizacao = new Date();

        this.params = params;
        //this.checkUsuario = Usuario.checkUsuario(params);
        //this.checkUsuarioAdmin = Usuario.checkUsuarioAdmin(params);
    }

    static getFornecedor = (fornecedor) => {

        let res = {

            _id: fornecedor._id,
            tipoPessoa: fornecedor.tipoPessoa,
            razaoSocial: fornecedor.razaoSocial,
            nomeFantasia: fornecedor.nomeFantasia,
            cnpjOuCpf: fornecedor.cnpjOuCpf,
            inscEstOuRg: fornecedor.inscEstOuRg,
        
            telefone: fornecedor.telefone,
            celular: fornecedor.celular,
            contato: fornecedor.contato,
            fax: "              ",
            email: fornecedor.email,

            banco: fornecedor.banco,
            agencia: fornecedor.agencia,
            numeroConta: fornecedor.numeroConta,
            nomeConta: fornecedor.nomeConta,
            tipoConta: fornecedor.tipoConta,
            cnpjOuCpfConta: fornecedor.cnpjOuCpfConta,
            valorDoc: fornecedor.valorDoc,
            taxaCred: fornecedor.taxaCred,
            observacao: fornecedor.observacao,
            origem: fornecedor.origem,
            vendedor: fornecedor.vendedor,
            diaPagamento: fornecedor.diaPagamento,
            sairSite: "N",

            ramoAtividade: fornecedor.ramoAtividade,
            adminCartao: fornecedor.adminCartao,
            agenda: fornecedor.agenda,
            numeroLogico: fornecedor.numeroLogico,
            endereco: fornecedor.endereco
        };

        return res;
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

        try {

            let error = false;
            this.fornecedor.dataCadastro = new Date();

            let fornecedorInserir = Fornecedor.getFornecedor(this.fornecedor);
            fornecedorInserir.dataCadastro = this.fornecedor.dataCadastro;

            const A = (newLeng, prop) => {

                let length = newLeng - prop.length;

                if (length < 0) {

                    console.log("erro de texto " + prop);
                    error = true;
                }

                for (let i = 0; i < length; i++) {

                    prop += " ";
                }

                return prop;
            }

            const N = (newLeng, prop) => {

                prop = prop.replace(",", "");

                let length = newLeng - prop.length;
                let zeros = "";

                if (length < 0) {

                    console.log("erro de numero " + prop);
                    error = true;
                }

                for (let i = 0; i < length; i++) {

                    zeros += "0";
                }

                prop = zeros + prop;

                return prop;
            }

            const D = (newLeng, prop) => {

                if (prop.length > 10) {

                    console.log("erro de data1 " + prop);
                    error = true;
                }

                prop = prop.replace("/", "");
                prop = prop.replace("/", "");

                let length = newLeng - prop.length;

                if (length < 0) {

                    console.log("erro de data2 " + prop);
                    error = true;
                }

                for (let i = 0; i < length; i++) {

                    prop += " ";
                }

                return prop;
            }

            const telCel = (newLeng, prop, defaultVal = "( 0)0") => {

                prop = prop.replace(" ", "");
                prop = prop.replace("-", "");
 
                prop = A(newLeng, prop);
                if (prop.length < 5) prop = defaultVal;

                return prop;
            }

            let nomeArquivo = this.fornecedor.cnpjOuCpf;
            nomeArquivo = nomeArquivo.replace(".", "");
            nomeArquivo = nomeArquivo.replace("/", "");
            nomeArquivo = nomeArquivo.replace("-", "");
            nomeArquivo = nomeArquivo.replace(".", "");

            nomeArquivo = N(14, nomeArquivo);

            if (this.fornecedor.tipoPessoa != "1" && this.fornecedor.tipoPessoa != "2") return;
            this.fornecedor.razaoSocial = A(50,  this.fornecedor.razaoSocial).toUpperCase();
            this.fornecedor.nomeFantasia = A(30, this.fornecedor.nomeFantasia).toUpperCase();
            this.fornecedor.cnpjOuCpf = A(20, this.fornecedor.cnpjOuCpf);
            this.fornecedor.inscEstOuRg = A(20, this.fornecedor.inscEstOuRg);
            this.fornecedor.telefone = telCel(14, this.fornecedor.telefone);
            this.fornecedor.celular = telCel(14, this.fornecedor.celular);
            this.fornecedor.contato = A(50, this.fornecedor.contato).toUpperCase();
            this.fornecedor.email = A(60, this.fornecedor.email);
            this.fornecedor.banco = N(9, this.fornecedor.banco);
            this.fornecedor.agencia = A(6, this.fornecedor.agencia).toUpperCase();
            this.fornecedor.numeroConta = A(20, this.fornecedor.numeroConta);
            if (this.fornecedor.tipoConta != "1" && this.fornecedor.tipoConta != "2") return;
            this.fornecedor.valorDoc = N(11, this.fornecedor.valorDoc);
            this.fornecedor.cnpjOuCpfConta = A(20, this.fornecedor.cnpjOuCpfConta);
            this.fornecedor.nomeConta = A(50, this.fornecedor.nomeConta).toUpperCase();
            this.fornecedor.vendedor = N(6, this.fornecedor.vendedor);
            this.fornecedor.diaPagamento = N(2, this.fornecedor.diaPagamento);
            if (this.fornecedor.sairSite != "S" && this.fornecedor.sairSite != "N") return;
            this.fornecedor.taxaCred = N(15, this.fornecedor.taxaCred);
            this.fornecedor.observacao = A(14, this.fornecedor.observacao);

            let dadosStr = "FO"+ this.fornecedor.tipoPessoa + this.fornecedor.razaoSocial + this.fornecedor.nomeFantasia + 
                this.fornecedor.cnpjOuCpf + this.fornecedor.inscEstOuRg + this.fornecedor.telefone + this.fornecedor.celular +
                this.fornecedor.contato + this.fornecedor.fax + this.fornecedor.email + this.fornecedor.banco + this.fornecedor.agencia +
                this.fornecedor.numeroConta + this.fornecedor.tipoConta + this.fornecedor.valorDoc + this.fornecedor.cnpjOuCpfConta + 
                this.fornecedor.nomeConta + this.fornecedor.vendedor + this.fornecedor.diaPagamento + this.fornecedor.sairSite + 
                this.fornecedor.taxaCred + this.fornecedor.observacao + "\n";

            let ramoAtividadeStr = "";

            if (this.fornecedor.ramoAtividade[0].ramoAtividade != "") {

                for (let i = 0; i < this.fornecedor.ramoAtividade.length; i++) {

                    this.fornecedor.ramoAtividade[i] = N(8, this.fornecedor.ramoAtividade[i]);

                    ramoAtividadeStr += "RA" + this.fornecedor.ramoAtividade[i] + "\n";
                }
            }

            let adminCartaoStr = "";

            if (this.fornecedor.adminCartao[0].tipoCartao != "") {

                for (let i = 0; i < this.fornecedor.adminCartao.length; i++) {
    
                    this.fornecedor.adminCartao[i].tipoCartao = N(6, this.fornecedor.adminCartao[i].tipoCartao);
                    this.fornecedor.adminCartao[i].taxaAdm = N(10, this.fornecedor.adminCartao[i].taxaAdm);
                    this.fornecedor.adminCartao[i].tipoPagamento = N(9, this.fornecedor.adminCartao[i].tipoPagamento);
    
                    adminCartaoStr += "AC" + 
                    this.fornecedor.adminCartao[i].tipoCartao + 
                    this.fornecedor.adminCartao[i].taxaAdm + 
                    "SS" + this.fornecedor.adminCartao[i].tipoPagamento + "S" + "\n";
                }
            }

            let agendaStr = "";

            if (this.fornecedor.agenda[0].tipoOperacao != "") {

                for (let i = 0; i < this.fornecedor.agenda.length; i++) {

                    this.fornecedor.agenda[i].tipoOperacao = N(9, this.fornecedor.agenda[i].tipoOperacao);
                    this.fornecedor.agenda[i].tipoDocumento = N(9, this.fornecedor.agenda[i].tipoDocumento);
                    this.fornecedor.agenda[i].dataInicio = D(8,this.fornecedor.agenda[i].dataInicio);
                    this.fornecedor.agenda[i].dataFim = D(8,this.fornecedor.agenda[i].dataFim);
                    this.fornecedor.agenda[i].valor = N(15, this.fornecedor.agenda[i].valor);
                    this.fornecedor.agenda[i].frequencia = N(1, this.fornecedor.agenda[i].frequencia);
                    if (this.fornecedor.agenda[i].observacao.length > 200) {
                        this.fornecedor.agenda[i].observacao = A(200, this.fornecedor.agenda[i].observacao);
                    }

                    agendaStr += "AG" + 
                    this.fornecedor.agenda[i].tipoOperacao + 
                    this.fornecedor.agenda[i].tipoDocumento + 
                    this.fornecedor.agenda[i].dataInicio + 
                    this.fornecedor.agenda[i].dataFim + 
                    this.fornecedor.agenda[i].valor + 
                    this.fornecedor.agenda[i].frequencia + 
                    this.fornecedor.agenda[i].observacao + "\n";
                }
            }

            let numeroLogicoStr = "";

            if (this.fornecedor.numeroLogico[0].numeroLogico != "") {

                for (let i = 0; i < this.fornecedor.numeroLogico.length; i++) {

                    this.fornecedor.numeroLogico[i].numeroLogico = N(15, this.fornecedor.numeroLogico[i].numeroLogico);
                    this.fornecedor.numeroLogico[i].origem = A(8, this.fornecedor.numeroLogico[i].origem);

                    numeroLogicoStr += "NL" + 
                    this.fornecedor.numeroLogico[i].numeroLogico +
                    this.fornecedor.numeroLogico[i].origem + "\n";
                }
            }

            let enderecoStr = "";

            if (this.fornecedor.endereco[0].cep != "") {

                for (let i = 0; i < this.fornecedor.endereco.length; i++) {

                    let n = "\n";

                    if (this.fornecedor.endereco.length - 1 == i) n = "";
                    
                    this.fornecedor.endereco[i].tipoEndereco = N(9, this.fornecedor.endereco[i].tipoEndereco);
                    this.fornecedor.endereco[i].cep = this.fornecedor.endereco[i].cep.replace("-", "");
                    this.fornecedor.endereco[i].cep = A(9, this.fornecedor.endereco[i].cep);
                    this.fornecedor.endereco[i].logradouro = A(3, this.fornecedor.endereco[i].logradouro).toUpperCase();
                    this.fornecedor.endereco[i].endereco = A(40, this.fornecedor.endereco[i].endereco).toUpperCase();
                    this.fornecedor.endereco[i].numero = A(6, this.fornecedor.endereco[i].numero);
                    this.fornecedor.endereco[i].complemento = A(10, this.fornecedor.endereco[i].complemento).toUpperCase();
                    this.fornecedor.endereco[i].bairro = A(40, this.fornecedor.endereco[i].bairro).toUpperCase();
                    this.fornecedor.endereco[i].cidade = A(40, this.fornecedor.endereco[i].cidade).toUpperCase();
                    this.fornecedor.endereco[i].telefone = telCel(14, tthis.fornecedor.endereco[i].telefone, "0");
                    this.fornecedor.endereco[i].estado = A(2, this.fornecedor.endereco[i].estado).toUpperCase();

                    enderecoStr += "RE" +
                    this.fornecedor.endereco[i].tipoEndereco + 
                    this.fornecedor.endereco[i].cep +
                    this.fornecedor.endereco[i].logradouro + 
                    this.fornecedor.endereco[i].endereco +
                    this.fornecedor.endereco[i].numero +
                    this.fornecedor.endereco[i].complemento +
                    this.fornecedor.endereco[i].bairro + 
                    this.fornecedor.endereco[i].cidade +
                    this.fornecedor.endereco[i].telefone +
                    this.fornecedor.endereco[i].estado + n;
                }
            }

            console.log(error);

            if (error) return;

            let str = 
                dadosStr +
                ramoAtividadeStr +
                adminCartaoStr +
                agendaStr +
                numeroLogicoStr +
                enderecoStr;

            let arquivo = './enviadosOrg/'+ nomeArquivo +'.REM';
        
            fs.writeFile(arquivo, str, function (err) {
                //if (err) throw err;
                console.log('Saved!');

                let c = new Client();
    
                c.on('ready', function() {
                    c.put(str, '/INCLUSAO/'+ nomeArquivo +'.REM', function(err) {
                    //if (err) throw err;
                        c.end();
                    });
                });

                c.connect({host: "177.70.106.26", user: "sindplus", password: ""});
            });

            const checkUsuario = await Usuario.checkUsuario(this.params);

            if(checkUsuario) return dm.postOne(collection, fornecedorInserir);
            else return null;

        } catch(e) {
            console.log(e);
            console.log("deu erro");
            return null;
        }
    }

    async put () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if(checkUsuarioAdmin) return dm.putOne(collection, this.fornecedor);
        else return null;
    }

    async delete () {

        const checkUsuarioAdmin = await Usuario.checkUsuarioAdmin(this.params);

        if(checkUsuarioAdmin) return dm.deleteOne(collection, this.fornecedor);
        else return null;
    }
}

module.exports = Fornecedor;