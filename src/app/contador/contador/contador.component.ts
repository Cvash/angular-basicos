import { from } from "rxjs";
import { Component } from '@angular/core';

@Component( {
    selector: 'app-contador', /* Colocar el nombre que quieras */
    template: `

        <h1> {{ title }} </h1>

        <h3>La base del numero es: <strong> {{ base }} </strong></h3>

        <button (click) = " acumular(+base) "  > + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click) = " acumular(-base) " > - {{ base }} </button>
    
    `
} )
export class contadorComponent {
    public title: string = 'Pelea de perros';
    public numero: number = 5; 

    //tarea
    public base  : number = 5;

    acumular( base: number ) {
        this.numero += base;
  }
}