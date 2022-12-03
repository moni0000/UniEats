import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor( public alertcontroller: AlertController, 
    public navCtrl: NavController,private placesService: PlacesService) { }

  ngOnInit() {
  }
  async salir(){
    const alert = await this.alertcontroller.create({
      header: 'salir',
      message: 'Estas seguro de salir de la app',
      buttons: [
        {
          text: 'No',
          handler:()=>{
          }
        }, {
          text: 'Si',
          handler:()=>{
            localStorage.removeItem('ingresado'); 
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();

  }
}
