import { Component, OnInit } from '@angular/core';

import { Empresa } from '../model';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styles: []
})
export class CadastroEmpresaComponent implements OnInit {

  empresa: Empresa;

  constructor() {
    this.empresa = new Empresa();
   }

  ngOnInit() {
  }

  limparInputs() {
    this.empresa = new Empresa();
  }

  cadastrarEmpresa() {
    console.log(this.empresa);
  }

}
