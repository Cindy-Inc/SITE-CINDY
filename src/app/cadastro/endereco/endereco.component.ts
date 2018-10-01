import { Component, OnInit, Input } from '@angular/core';

import { Usuario } from '../../model';
import { ConsultaCepDTO } from '../../dto';
import { ConsultaCepService } from '../../service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styles: []
})
export class EnderecoComponent implements OnInit {

  isBuscandoCEP: boolean;

  constructor(private consultaCepService: ConsultaCepService) {}

  @Input() user: Usuario;

  ngOnInit() {
  }

  private consultaCep() {
    if (this.user.zip && this.user.zip.length >= 8) {
      this.isBuscandoCEP = true;
      this.consultaCepService.getEnderecoFromCEP(this.user.zip).subscribe(end => {
        this.fromCep(end);
        this.isBuscandoCEP = false;
      });
    }
  }

  private fromCep(enderecoCep: ConsultaCepDTO) {
    if (enderecoCep) {
      this.user.district = enderecoCep.bairro;
      this.user.zip = enderecoCep.cep;
      this.user.city = enderecoCep.localidade;
      this.user.address = enderecoCep.logradouro;
      this.user.state = enderecoCep.uf;
    }
  }

}
