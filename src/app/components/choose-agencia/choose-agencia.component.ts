import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { InicioComponent } from "../inicio/inicio.component";

@Component({
  selector: 'app-choose-agencia',
  standalone: true,
  imports: [
    CommonModule, NavegacionComponent,
    InicioComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-inicio></app-inicio>
  `,
  styleUrl: './choose-agencia.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseAgenciaComponent { 

  constructor() {


  }



  ngOnInit() {

  }

}
