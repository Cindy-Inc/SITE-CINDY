export class Empresa {

    cnpj: string;
    razaoSocial: string;
    ramoAtuacao: string;

    constructor(empresa: Empresa = null) {
        if (empresa) {
            this.cnpj = empresa.cnpj;
            this.razaoSocial = empresa.razaoSocial;
            this.ramoAtuacao = empresa.ramoAtuacao;
        }
    }
}
