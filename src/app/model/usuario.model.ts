export class Usuario {

    codigo: string;
    nome: string;
    sexo: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    uf: string;
    cidade: string;
    email: string;
    senha: string;

    constructor(usuario: Usuario = null) {
        if (usuario) {
            this.codigo = usuario.codigo;
            this.nome = usuario.nome;
            this.sexo = usuario.sexo;
            this.cep = usuario.cep;
            this.logradouro = usuario.logradouro;
            this.numero = usuario.numero;
            this.complemento = usuario.complemento;
            this.uf = usuario.uf;
            this.cidade = usuario.cidade;
            this.email = usuario.email;
            this.senha = usuario.senha;
        }
    }
}
