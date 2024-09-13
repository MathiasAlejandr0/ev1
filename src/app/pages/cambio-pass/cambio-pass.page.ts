import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'//importamos la libreria router desde angular

@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.page.html',
  styleUrls: ['./cambio-pass.page.scss'],
})
export class CambioPassPage implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit() {
  }

  goToUserHome(){
    this.Router.navigate(['/user-home'])
   }//declaramos la clase para enrutar a la pagina de user home

}
