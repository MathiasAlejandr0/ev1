import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  router = inject(Router)

  ngOnInit() {
  }
  
  ionViewWillEnter(){
     setTimeout(() => {
      this.router.navigateByUrl('/home')
     }, 2800);
  }//muestra la intro casi 3 segundos antes de ir al login
}
