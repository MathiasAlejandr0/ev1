import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'//importamos la libreria router desde angular

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit() {
  }

  goToCambioPass(){
    this.Router.navigate(['/cambio-pass'])
   }//declaramos nuestra clase para enrutar a la pagina de cambio de pass

   goToUserHome(){
    this.Router.navigate(['/user-home'])
   }//declaramos la clase para enrutar a la pagina de user home

}
