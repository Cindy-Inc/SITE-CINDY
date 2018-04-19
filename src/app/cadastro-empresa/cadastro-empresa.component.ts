import { Component, OnInit } from '@angular/core';

import { Empresa, Usuario } from '../model';
import { ConsultaCepService } from '../service';
import { ConsultaCepDTO } from '../dto';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  usuario: Usuario;
  cep: string;

  constructor(private consultaCepService: ConsultaCepService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  private consultaCep() {
    this.consultaCepService.getEnderecoFromCEP(this.cep).subscribe(end => {
      this.fromCep(end);
    });
  }

  private fromCep(enderecoCep: ConsultaCepDTO) {
    if (enderecoCep) {
      // this.usuario.bairro = enderecoCep.bairro;
      this.usuario.cep = enderecoCep.cep;
      this.usuario.complemento = enderecoCep.complemento;
      this.usuario.cidade = enderecoCep.localidade;
      this.usuario.logradouro = enderecoCep.logradouro;
      this.usuario.uf = enderecoCep.uf;
    }
  }

  fileChange(event) {
    // const fileList: FileList = event.target.files;
    // if (fileList.length > 0) {
    //   const file: File = fileList[0];
    //   const img = document.querySelector('#cadastro-avatar-img');
    //   img.file = file;

    //   const reader = new FileReader();
    //   reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
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
