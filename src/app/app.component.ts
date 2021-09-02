import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejericio1';
  
  myUsuario:Usuario;
  
  
  constructor() {
    this.myUsuario=new Usuario();
  }

  saludar(){
    console.log("Hola 4B");
  }
}
