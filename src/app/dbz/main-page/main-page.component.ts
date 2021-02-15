import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }


// Al colocar el constructor, se podra imprimir lo escrito en consola, pero  además si se le llama varias veces, solo se llama una vez y gasto de menos recursos. 
  constructor( ) { }; 


}
