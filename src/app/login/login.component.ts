import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credencial1 = '';
  credencial2 = '';
  credencial1ValError:boolean=false;
  credencial2ValError:boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    

  }

  hacerLogin(credencial1: string, credencial2: string) {
    this.checkearValores()
   /* if (this.helper.esCadenaVacia(credencial1) || this.helper.esCadenaVacia(credencial2)) {
      if (this.helper.esCadenaVacia(credencial1)) {
        this.credencial1ValError = true;
      } else {
        this.quitarRequerido(1);
      }

      if (this.helper.esCadenaVacia(credencial2)) {
        this.credencial2ValError = true;
      } else {
        this.quitarRequerido(2);
      }
    } else {

      this.quitarRequerido(null);

      let oUsu = this.ps.obtenerUsuario();

      //const fechaTratada = this.helper.formatDate(credencial2);

      if (oUsu == null) {
        oUsu = new Usuario(credencial1, this.SHA512(credencial2).toString());
      } else {
        oUsu.credencial1 = credencial1;
        oUsu.credencial2 = this.SHA512(credencial2).toString();
      }

      this.ps.guardarUsuario(oUsu);

      this.irVisorConsultas();
    }*/

    this.router.navigate(['bills']);

  }
  checkearValores(){
    if (this.credencial1==null || this.credencial1.length==0) {
      this.credencial1ValError = true;
    }else{
      this.credencial1ValError = false;
    }
    if (this.credencial2==null || this.credencial2.length==0) { 
      this.credencial2ValError = true;
    }else{
      this.credencial2ValError = false;
    }

  }

  
}
