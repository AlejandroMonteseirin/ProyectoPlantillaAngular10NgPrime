import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PersistenciaServiceProvider } from './../services/persistencia.service';
/*
import {Usuario} from '../../models/usuario';
import {PeticionGetFarmaciasPOCO} from '../../models/peticiongetfarmacias';
import {PeticionGetConsultasPOCO} from '../../models/peticiongetconsultas';
import { HelperService } from './helper.service';
import { PeticionRecuperarPassWPPOCO } from '../../models/peticionrecuperarpass';
import { PeticionCambiarPassWPPOCO } from '../../models/peticioncambiarpass';
import { PeticionUpdateCAPWPPOCO } from '../../models/peticionaceptacionpublicidad';
*/
@Injectable()

export class APIService {

  /*"_urlWSDev": "http://localhost/NC_ConsultasWS",
  "_urlWSPRE": "https://nc.itsoft.es/NC_ConsultasWS_pre",
  "_urlWSPRO": "https://nc.itsoft.es/NC_ConsultasWS",
  "urlWS": "http://localhost/NC_ConsultasWS",*/
  tokenWS = 'iNCaftOFxUEObuU0T0R3m0UufFeG6oFHneXJbe0lueOipdz14y4ywVeEC7Bks4ZTWJefdS6RWaHz46xX';
  url = "https://nc.itsoft.es/NC_ConsultasWS";
  //url = "http://localhost/NC_ConsultasWS";
  //url = "http://ncdev.itsoft.es/NC_ConsultasWS";
  constructor(public http: HttpClient, public ps: PersistenciaServiceProvider,/* public helper: HelperService*/) {
    /*if (this.helper.esCadenaVacia(this.url)) {
      this.obtenerURLWS();
    }*/
  }

 /* obtenerURLWS() {
      this.http.get('assets/config/config.json').subscribe(data => {
        const configData: any = data;

        this.url = configData.urlWS;
      }
    );
  }*//*

  public doFarmacias(codigoPostal, latitud, longitud, incrementoLatitud, incrementoLongitud) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');

    const oPeticionGetFarmaciasPOCO: PeticionGetFarmaciasPOCO = new PeticionGetFarmaciasPOCO();

    oPeticionGetFarmaciasPOCO.codigoPostal = codigoPostal;
    oPeticionGetFarmaciasPOCO.latitud = latitud;
    oPeticionGetFarmaciasPOCO.longitud = longitud;
    oPeticionGetFarmaciasPOCO.incrementoLatitud = incrementoLatitud;
    oPeticionGetFarmaciasPOCO.incrementoLongitud = incrementoLongitud;

    let jsonString = JSON.stringify(oPeticionGetFarmaciasPOCO);

    jsonString = '{"oPeticionGetFarmacias":' + jsonString + '}';

    return this.http.post(this.url + '/WS_Sincronizacion.svc/json/WSGetFarmaciasWP', jsonString, {headers: headers});
  }

  public doConsultas() {
   /* if (this.helper.esCadenaVacia(this.url)) {
      this.obtenerURLWS();
    }

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    headers = this.addHeaderAuthorization(headers);

    const oPeticionGetConsultasPOCO: PeticionGetConsultasPOCO = new PeticionGetConsultasPOCO();
    oPeticionGetConsultasPOCO.idIdioma = this.helper.dameIdIdiomaByIdioma();

    let jsonString = JSON.stringify(oPeticionGetConsultasPOCO);

    jsonString = '{"oPeticionGetConsultasWP":' + jsonString + '}';

    return this.http.post(this.url + '/WS_Sincronizacion.svc/json/WSGetConsultasWP', jsonString, {headers: headers});

  }

  private async getURLSYNC() {
    await this.http.get('assets/config/config.json').subscribe(data => {
        const configData: any = data;

        this.url = configData.urlWS;
      }
    );
  }

  public recuperarPass(email) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    //headers = this.addHeaderAuthorization(headers);

    const oPeticionRecuperarPassWPPOCO: PeticionRecuperarPassWPPOCO = new PeticionRecuperarPassWPPOCO();
    oPeticionRecuperarPassWPPOCO.email = email;

    let jsonString = JSON.stringify(oPeticionRecuperarPassWPPOCO);

    jsonString = '{"oPeticionRecoverPassWPPOCO":' + jsonString + '}';

    return this.http.post(this.url + '/WS_Sincronizacion.svc/json/WSRecoverPassWP', jsonString, {headers: headers});
  }

  public cambiarPass(actual, nueva) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    headers = this.addHeaderAuthorization(headers);

    const oPeticionCambiarPassWPPOCO: PeticionCambiarPassWPPOCO = new PeticionCambiarPassWPPOCO();
    oPeticionCambiarPassWPPOCO.actual = actual;
    oPeticionCambiarPassWPPOCO.nueva = nueva;

    let jsonString = JSON.stringify(oPeticionCambiarPassWPPOCO);

    jsonString = '{"oPeticionChangePassWPPOCO":' + jsonString + '}';

    return this.http.post(this.url + '/WS_Sincronizacion.svc/json/WSChangePassWP', jsonString, {headers: headers});
  }

  public aceptacionPublicidad(mail, otros) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    headers = this.addHeaderAuthorization(headers);

    const oPeticionUpdateCAPWPPOCO: PeticionUpdateCAPWPPOCO = new PeticionUpdateCAPWPPOCO();
    oPeticionUpdateCAPWPPOCO.email = mail;
    oPeticionUpdateCAPWPPOCO.otros = otros;

    let jsonString = JSON.stringify(oPeticionUpdateCAPWPPOCO);

    jsonString = '{"oPeticionUpdateCAPWPPOCO":' + jsonString + '}';

    return this.http.post(this.url + '/WS_Sincronizacion.svc/json/WSUpdateCAPWP', jsonString, {headers: headers});
  }

  public doDetalleConsulta(idEC) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    headers = this.addHeaderAuthorization(headers);

    const oPeticionGetDetalleConsultaPOCO: PeticionGetConsultasPOCO = new PeticionGetConsultasPOCO();

    oPeticionGetDetalleConsultaPOCO.idIdioma = this.helper.dameIdIdiomaByIdioma();
    oPeticionGetDetalleConsultaPOCO.idEC = idEC;

    let jsonString = JSON.stringify(oPeticionGetDetalleConsultaPOCO);

    jsonString = '{"oPeticionGetDetalleConsultaWP":' + jsonString + '}';

    return this.http.post(this.url + '/WS_Sincronizacion.svc/json/WSGetDetalleConsultaWP', jsonString, {headers: headers});
  }

  getLatLongByGoogle(codigoPostal) {
    let headers = new HttpHeaders();
    // quitada header para evitar cors por content-type
    // headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');

    const oUsu: Usuario = this.ps.obtenerUsuario();
    let idIdioma = 'es';

    if (oUsu != null) {
      idIdioma = oUsu.idIdioma;
    }

    const direccion = codigoPostal + this.helper.dameStringIdiomaByIdioma();

    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + direccion + '&components=country:' + idIdioma + '&sensor=false';

    return this.http.get(url, {headers: headers});
  }

  private addHeaderAuthorization(headers) {
    const oUsu: Usuario = this.ps.obtenerUsuario();

    if (oUsu != null) {
      const credencialesWS = oUsu.credencial1 + ';' + oUsu.credencial2 + ';' + this.tokenWS;

      const credencialesWSEncoded = btoa(credencialesWS);

      headers = headers.set('Authorization', 'Basic ' + credencialesWSEncoded);
    }

    return headers;
  }
  */
}
