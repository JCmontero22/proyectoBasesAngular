import { Component, EventEmitter, Output } from '@angular/core';
import { Chararter } from '../../interface/character.interface';

@Component({
    selector: 'app-agregar-personaje',
    templateUrl: './agregar.component.html',
    styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

    @Output()
    public agregarPersonaje: EventEmitter<Chararter> = new EventEmitter;

    public personaje: Chararter = {
        nombre: ''  ,
        poder: 0
    };

    imprimirPersonaje(){
        if (this.personaje.nombre.length === 0) {
            return;
        }

        this.agregarPersonaje.emit(this.personaje);
    }



}
