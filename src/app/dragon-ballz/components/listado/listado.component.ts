import { Component, Input } from '@angular/core';
import { Chararter } from '../../interface/character.interface';

@Component({
  selector: 'app-listado-dragonBallz',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    @Input()
    public characterList: Chararter[] = [
        /* {
          nombre: 'Trunks',
          poder: 2500
        } */
    ];
}
