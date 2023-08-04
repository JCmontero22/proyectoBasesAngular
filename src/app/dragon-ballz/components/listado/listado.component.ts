import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chararter } from '../../interface/character.interface';

@Component({
  selector: 'app-listado-dragonBallz',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    @Input()
    public characterList: Chararter[] = [
        {
          nombre: '',
          poder: 0
        }
    ];

    @Output()
    public eliminarPerosnajeId: EventEmitter<string> = new EventEmitter;

    /* elimianrPersonaje(idPersonaje: number): void{
        if (idPersonaje != null) {
            this.eliminarPerosnajeId.emit(idPersonaje);
        }
    } */

    eliminarPersonajeID(id?: string):void{
        console.log(id);

        if (!id) {
            return;
        }else{
            this.eliminarPerosnajeId.emit(id);
        }
    }


}
