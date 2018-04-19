import { Endereco } from './endereco.model';

export class Usuario {

    // codigo: string;
    nome: string;
    sobrenome: string;
    sexo: string;
    endereco: Endereco;
    email: string;
    senha: string;

    constructor(usuario: Usuario = null) {
        if (usuario) {
            // this.codigo = usuario.codigo;
            this.nome = usuario.nome;
            this.sobrenome = usuario.sobrenome;
            this.sexo = usuario.sexo;
            this.email = usuario.email;
            this.senha = usuario.senha;
            if (usuario.endereco) {
                this.endereco = usuario.endereco;
            } else {
                this.endereco = new Endereco();
            }
        }
    }
}
