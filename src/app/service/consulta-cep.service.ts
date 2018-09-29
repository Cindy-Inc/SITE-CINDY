import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConsultaCepDTO } from '../dto';

@Injectable()
export class ConsultaCepService {

  result: any;

  constructor(private _http: Http) { }

  getEnderecoFromCEP(cep: string) {
    return this._http.get('https://viacep.com.br/ws/' + cep + '/json/ ')
      .map(result => {
        return <ConsultaCepDTO>result.json();
      });
  }

}
