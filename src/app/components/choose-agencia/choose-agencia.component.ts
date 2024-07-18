import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { InicioComponent } from "../inicio/inicio.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-choose-agencia',
  standalone: true,
  imports: [
    CommonModule, NavegacionComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-inicio></app-inicio>
    <app-nosotros></app-nosotros>
    <app-servicios></app-servicios>
    <app-blog></app-blog>
  `,
  styleUrls: ['./choose-agencia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseAgenciaComponent { 

  constructor() {


  }



  ngOnInit() {

  }

}
