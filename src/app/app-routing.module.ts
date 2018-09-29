import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEmpresaComponent, CadastroUsuarioComponent, CadastroProdutoComponent } from './cadastro';

import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'cadastro-empresa',  component: CadastroEmpresaComponent },
  { path: 'cadastro-produto',  component: CadastroProdutoComponent },
  { path: 'cadastro-usuario',  component: CadastroUsuarioComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'login',  component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
