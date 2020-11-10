import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private router: Router) { }

  ngOnInit(): void {
  }


  cerrarSesion() {
    this.confirmationService.confirm({
        acceptLabel:"Si",
        rejectLabel:"No",
        message: 'Esta seguro que desea cerrar la sesión?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.router.navigate(['login']);

        }
    });
}
}
