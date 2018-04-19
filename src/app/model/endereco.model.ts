export class Endereco {

    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    uf: string;
    cidade: string;
    bairro: string;

    constructor (endereco: Endereco = null) {
        if (endereco) {
            this.cep = endereco.cep;
            this.logradouro = endereco.logradouro;
            this.numero = endereco.numero;
            this.complemento = endereco.complemento;
            this.uf = endereco.uf;
            this.cidade = endereco.cidade;
            this.bairro = endereco.bairro;
        }
     }
}
