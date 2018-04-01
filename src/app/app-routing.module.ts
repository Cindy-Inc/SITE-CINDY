import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'cadastro-empresa',  component: CadastroEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
