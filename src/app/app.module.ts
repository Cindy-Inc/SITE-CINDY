import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastroEmpresaComponent, CadastroProdutoComponent, CadastroUsuarioComponent } from './cadastro';
import { ConsultaCepService } from './service';
import { EnderecoComponent } from './cadastro/endereco/endereco.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ChangeStatusComponent } from './dashboard/change-status/change-status.component';
import { StatusBadgeComponent } from './dashboard/status-badge/status-badge.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroEmpresaComponent,
    CadastroUsuarioComponent,
    CadastroProdutoComponent,
    EnderecoComponent,
    DashboardComponent,
    LoginComponent,
    ChangeStatusComponent,
    StatusBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConsultaCepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
