import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CindyService {

  private cindyUrl = 'http://127.0.0.1';

  constructor(private _http: Http) { }

}
