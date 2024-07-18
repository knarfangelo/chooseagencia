import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { InicioComponent } from "../inicio/inicio.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { BlogComponent } from "../blog/blog.component";
import { ContactanosComponent } from "../contactanos/contactanos.component";

@Component({
  selector: 'app-choose-agencia',
  standalone: true,
  imports: [
    CommonModule, NavegacionComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent,
    ContactanosComponent
],
  template: `

    <app-navegacion></app-navegacion>
    <app-inicio id="inicio"></app-inicio>
    <app-nosotros id="nosotros" ></app-nosotros>
    <app-servicios id="servicios"></app-servicios>
    <app-blog id="blog"></app-blog>
    <app-contactanos id="contactanos"></app-contactanos>
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
