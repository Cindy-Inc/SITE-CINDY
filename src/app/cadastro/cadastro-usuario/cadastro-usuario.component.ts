import { Component, OnInit } from '@angular/core';

import { Empresa, Usuario } from '../../model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;
  cep: string;
  isBuscandoCEP: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  fileChange(event) {
    // const fileList: FileList = event.target.files;
    // if (fileList.length > 0) {
    //   const file: File = fileList[0];
    //   const img = document.querySelector('#cadastro-avatar-img');
    //   img.file = file;

    //   const reader = new FileReader();
    //   reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(img);
    //   reader.readAsDataURL(file);
    // }
  }

  limparInputs() {
    this.usuario = new Usuario();
  }

  cadastrarEmpresa() {
    console.log(this.usuario);
  }


}
