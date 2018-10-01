import { Endereco } from './endereco.model';

export class Usuario {

    username: string;
    name: string;
    address: string;
    number: string;
    complement: string;
    zip: string;
    state: string;
    city: string;
    district: string;
    phone: string;
    type: string;
    uf: string;
    email: string;
    password: string;

    constructor() {
      this.type = 'estabelecimento';
    }
}
