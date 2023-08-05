import { Component, Input } from '@angular/core';
import { Chararter } from '../../interface/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page-dragon-ballz',
  templateUrl: './main-page-dragon-ballz.component.html',
  styleUrls: ['./main-page-dragon-ballz.component.css']
})
export class MainPageDragonBallzComponent {
    constructor(private DbzService: DbzService){};

    get chararter():Chararter[]{
        return [... this.DbzService.chararters];
    };

    eliminar(id: string):void{
        this.DbzService.eliminarPersonajeID(id);
    }

    agregar(personaje: Chararter):void{
        this.DbzService.agregarPersonajes(personaje);
    }
}
