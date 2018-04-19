import { Component, OnInit, Input } from '@angular/core';

import { Endereco } from '../../model';
import { ConsultaCepDTO } from '../../dto';
import { ConsultaCepService } from '../../service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styles: []
})
export class EnderecoComponent implements OnInit {

  _endereco: Endereco;
  isBuscandoCEP: boolean;

  constructor(private consultaCepService: ConsultaCepService) {
    this._endereco = new Endereco();
  }

  @Input() set endereco(e: Endereco) {
    if (e) {
      this._endereco = e;
    }
  }

  get endereco(): Endereco {
    return this._endereco;
  }

  ngOnInit() {
  }

  private consultaCep() {
    if (this.endereco.cep && this.endereco.cep.length >= 8) {
      this.isBuscandoCEP = true;
      this.consultaCepService.getEnderecoFromCEP(this.endereco.cep).subscribe(end => {
        this.fromCep(end);
        this.isBuscandoCEP = false;
      });
    }
  }

  private fromCep(enderecoCep: ConsultaCepDTO) {
    if (enderecoCep) {
      this.endereco.bairro = enderecoCep.bairro;
      this.endereco.cep = enderecoCep.cep;
      this.endereco.complemento = enderecoCep.complemento;
      this.endereco.cidade = enderecoCep.localidade;
      this.endereco.logradouro = enderecoCep.logradouro;
      this.endereco.uf = enderecoCep.uf;
      this.endereco.bairro = enderecoCep.bairro;
    }
  }

}
