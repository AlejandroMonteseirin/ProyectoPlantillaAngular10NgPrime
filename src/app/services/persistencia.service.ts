import { Injectable } from '@angular/core';
//import { Constantes } from '../../models/constantes';
import {TranslateService} from '@ngx-translate/core';

import { isNumber } from 'util';

import { HelperService } from './helper.service';
//import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class PersistenciaServiceProvider {
  public keyUsuario: string;
  public keyFarmacias: string;
  public keyConsultas: string;
  public keyDetalleConsulta: string;
  public keyToken: string;

  constructor(/*private cookies: CookieService,*/ private translate: TranslateService) {
      this.keyToken = 'vtk'
      this.keyUsuario = 'vusu';
      this.keyFarmacias = 'vfar';
      this.keyConsultas = 'vcons';
      this.keyDetalleConsulta = 'vdcon';
  }

  guardarToken(oToken: number) {
    if (oToken == null ||oToken == undefined) {
      localStorage.removeItem(this.keyToken);
    } else {
      localStorage.setItem(this.keyToken, btoa(JSON.stringify(oToken)));

    }

  }

  obtenerToken() {
    const tokenAux = localStorage.getItem(this.keyToken);

    if (!this.esCadenaVacia(tokenAux)) {
      return JSON.parse(atob(tokenAux));
    } else {
      return null;
    }
  }
/*
  guardarUsuario(oUsuario: Usuario) {
    localStorage.setItem(this.keyUsuario, btoa(JSON.stringify(oUsuario)));
  }

  obtenerUsuario() {
    const usuAux = localStorage.getItem(this.keyUsuario);

    if (!this.esCadenaVacia(usuAux)) {
      return JSON.parse(atob(usuAux));
    } else {
      return null;
    }
  }

  guardarFarmacias(oFarmacias: Farmacia[]) {
    localStorage.setItem(this.keyFarmacias, btoa(JSON.stringify(oFarmacias)));
  }

  obtenerFarmacias() {
    const farmaciasAux = localStorage.getItem(this.keyFarmacias);

    if (!this.esCadenaVacia(farmaciasAux)) {
      return JSON.parse(atob(farmaciasAux));
    } else {
      return null;
    }
  }

  guardarConsultas(oConsultas: any[]) {
    localStorage.setItem(this.keyConsultas, btoa(JSON.stringify(oConsultas)));
  }

  obtenerConsultas() {
    const consultasAux = localStorage.getItem(this.keyConsultas);

    if (!this.esCadenaVacia(consultasAux)) {
      return JSON.parse(atob(consultasAux));
    } else {
      return null;
    }
  }

  guardarDetalleConsulta(oDetalleConsulta: DetalleConsulta) {
    localStorage.setItem(this.keyDetalleConsulta, btoa(JSON.stringify(oDetalleConsulta)));
  }

  obtenerDetalleConsulta() {
    const detalleConsultaAux = localStorage.getItem(this.keyDetalleConsulta);

    if (!this.esCadenaVacia(detalleConsultaAux)) {
      return JSON.parse(atob(detalleConsultaAux));
    } else {
      return null;
    }
  }
*/
  desconectarUsuario() {
    localStorage.removeItem(this.keyUsuario);
    localStorage.removeItem(this.keyFarmacias);
    localStorage.removeItem(this.keyConsultas);
    localStorage.removeItem(this.keyDetalleConsulta);
    //this.cookies.remove(Constantes.CK);
  }

  public esCadenaVacia(valor: string) {
    const isEmpty = (valor === null || valor === undefined || valor.trim().length === 0);

    return isEmpty;
  }
}
