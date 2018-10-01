import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CindyService {

  private cindyUrl = 'http://localhost:3000/api/v1';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmFmZmU0ODNkNTU3MDA3MDVmNWJkYWIiLCJlbWFpbCI6ImFkbWluQGNpbmR5LmNvIiwibmFtZSI6IkNJTkRZIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1MzgyNjExNTZ9.wf2wELKO03_Wa5XjmHwRMaRQYji1mErAsTdUcPMumA0';
  opts: RequestOptions;

  constructor(private _http: Http) {
    const headers = new Headers();
    headers.append('Authorization', this.token);
    this.opts = new RequestOptions();
    this.opts.headers = headers;
  }

  cadastroUsuario(user) {
    return this._http.post(this.cindyUrl + '/user', user, this.opts);
  }

  getOrderList() {
    return this._http.get(this.cindyUrl + '/order', this.opts);
  }

}
