import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDragonBallzComponent } from './pages/main-page-dragon-ballz/main-page-dragon-ballz.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarComponent } from './components/agregar/agregar.component';




@NgModule({
  declarations: [
    MainPageDragonBallzComponent,
    ListadoComponent,
    AgregarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageDragonBallzComponent
  ]
})
export class DragonBallzModule { }
