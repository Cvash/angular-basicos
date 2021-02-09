import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent { 
    nombre: string = 'Ironman';
    edad: number   = 50;

    // usando los getter y los setter, en este caso get
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return ` ${this.nombre} - ${this.edad}; `;
    }

    cambiarHeroe() {
        this.nombre = 'Spiderman';
    }

    cambiarEdad() {
        this.edad = 30;
    }

 }
