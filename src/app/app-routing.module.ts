import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoFacturasComponent } from './listado-facturas/listado-facturas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login'   , component: LoginComponent },
  { path: 'bills'   , component: ListadoFacturasComponent },

  { path: '' , pathMatch:"full", redirectTo: 'login' },
  { path: '**', pathMatch:"full", redirectTo: 'login' }



];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
