import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Usuario } from '../../model';
import { CindyService } from '../../service/';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;
  cep: string;
  isBuscandoCEP: boolean;
  returnMsg: string;

  constructor(private cindyService: CindyService,
    private router: Router) {
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
    this.cindyService.cadastroUsuario(this.usuario).subscribe((data) => {
      this.returnMsg = 'Usuário cadastrado com sucesso!';
      this.router.navigate(['login']);
    }, (err) => {
      this.returnMsg = 'Erro ao cadastrar usuário!';
    });
  }
}
