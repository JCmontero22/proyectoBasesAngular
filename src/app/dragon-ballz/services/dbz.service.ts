import { Injectable, Input } from '@angular/core';
import { Chararter } from '../interface/character.interface';
import { v4 as uuid } from "uuid";
@Injectable({
  providedIn: 'root'
})
export class DbzService {
    @Input()
    public chararters: Chararter[] = [
        {
            id: uuid(),
            nombre: 'Krillin',
            poder: 100
        },
        {
            id: uuid(),
            nombre: 'Goku',
            poder: 9500
        }
    ];

    agregarPersonajes(personaje: Chararter): void{

        //primera manera de asignar
        /* const nuevoPersonaje: Chararter = {
            id: uuid(),
            nombre: personaje.nombre,
            poder: personaje.poder
        } */


        //segunda manera de asignar
        const nuevoPersonaje: Chararter = {id: uuid(), ...personaje}

        this.chararters.push(nuevoPersonaje);

    }

    /* eliminarPersonaje(index: number): void{
        this.chararters.splice(index, 1);
    } */

    eliminarPersonajeID(id: string):void{
      this.chararters = this.chararters.filter(chararters => chararters.id !== id);
    }
}
