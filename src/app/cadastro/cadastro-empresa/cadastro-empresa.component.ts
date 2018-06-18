import { Component, OnInit } from '@angular/core';

import { Empresa, Usuario, Endereco } from '../../model';
import { ConsultaCepService } from '../../service';
import { ConsultaCepDTO } from '../../dto';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  usuario: Usuario;
  novoEndereco: Endereco;

  constructor() {
    this.usuario = new Usuario();
    this.novoEndereco = new Endereco();
   }

  ngOnInit() {
  }

  addEndereco() {
    this.novoEndereco = new Endereco();
  }

}
