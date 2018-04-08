import { Component, OnInit } from '@angular/core';

import { Empresa } from '../model';
import { ConsultaCepService } from '../service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  empresa: Empresa;
  cep: string;

  constructor(private consultaCepService: ConsultaCepService) {
    this.empresa = new Empresa();
   }

  ngOnInit() {
  }

  consultaCep() {
    this.consultaCepService.getEnderecoFromCEP(this.cep).subscribe(end => {
      console.log(end);
    });
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
    this.empresa = new Empresa();
  }

  cadastrarEmpresa() {
    console.log(this.empresa);
  }

}
