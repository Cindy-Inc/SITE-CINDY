import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEmpresaComponent, CadastroUsuarioComponent } from './cadastro';

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'cadastro-empresa',  component: CadastroEmpresaComponent },
  { path: 'cadastro-usuario',  component: CadastroUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
