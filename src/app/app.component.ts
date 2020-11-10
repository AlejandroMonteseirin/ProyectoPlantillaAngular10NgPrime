import { Component,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';


const defaultLanguage = "en";
const additionalLanguages = ["es"];
const languages: string[] = [defaultLanguage].concat(additionalLanguages);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'Angular-NC-Visor-Facturas';
  
  constructor(private primengConfig: PrimeNGConfig,        private translate: TranslateService,
    ) {
      
    }

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.translate.setDefaultLang(defaultLanguage);
      this.translate.addLangs(additionalLanguages);

    /* let initLang = this.translate.getBrowserLang();
      if (languages.indexOf(initLang) === -1) {
          initLang = defaultLanguage;
      

      let oUsu = this.ps.obtenerUsuario();

      if (oUsu == null) {
        oUsu = new Usuario('', '');
      }

      oUsu.idIdioma = initLang;

      this.ps.guardarUsuario(oUsu);
    */

      //hardcodeado a español
      let initLang="es"
      this.translate.use(initLang);
  }
}
