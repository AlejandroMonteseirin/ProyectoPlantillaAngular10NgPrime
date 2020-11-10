import { Injectable } from '@angular/core';
import { PersistenciaServiceProvider } from './persistencia.service';

@Injectable()

export class HelperService {
  constructor(public ps: PersistenciaServiceProvider) { }

  public convertirFechaUTCALocal(dateString: string) {
    const date = new Date(dateString);
    const newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    const offset = date.getTimezoneOffset() / 60;
    const hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }

  public esCadenaVacia(valor: string) {
    const isEmpty = (valor === null || valor === undefined || valor.trim().length === 0);

    return isEmpty;
  }

 /* public dameStringIdiomaByIdioma() {
    const usuAux = this.ps.obtenerUsuario();

    if (usuAux.idIdioma === 'en') {
        return ' Inglaterra';
    } else if (usuAux.idIdioma === 'pt') {
        return ' Portugal';
    } else if (usuAux.idIdioma === 'fr') {
        return ' Francia';
    } else if (usuAux.idIdioma === 'it') {
        return ' Italia';
    } else {
        return ' España';
    }
  }

  public dameIdIdiomaByIdioma() {
    const usuAux = this.ps.obtenerUsuario();

    if (usuAux.idIdioma === 'es') {
        return '1';
    } else if (usuAux.idIdioma === 'en') {
       return '2';
    } else if (usuAux.idIdioma === 'pt') {
        return '3';
    } else if (usuAux.idIdioma === 'fr') {
        return '4';
    } else if (usuAux.idIdioma === 'it') {
        return '5';
    } else {
        return '1';
    }
  }*/

  public formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
}
}
