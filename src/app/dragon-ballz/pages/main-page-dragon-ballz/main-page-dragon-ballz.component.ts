import { Component, Input } from '@angular/core';
import { Chararter } from '../../interface/character.interface';

@Component({
  selector: 'app-main-page-dragon-ballz',
  templateUrl: './main-page-dragon-ballz.component.html',
  styleUrls: ['./main-page-dragon-ballz.component.css']
})
export class MainPageDragonBallzComponent {
    @Input()

    public chararters: Chararter[] = [
        {
            nombre: 'Krillin',
            poder: 100
        },
        {
            nombre: 'Goku',
            poder: 9500
        }
    ];
}
