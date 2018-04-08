import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultaCepService {

  result: any;

  constructor(private _http: Http) { }

  getEnderecoFromCEP(cep: string) {
      console.log(cep);
    return this._http.get('https://viacep.com.br/ws/' + cep + '/json/ ')
      .map(result => {
        return result.json();
      });
  }

}
