import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { InicioComponent } from "../inicio/inicio.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { BlogComponent } from "../blog/blog.component";
import { ContactanosComponent } from "../contactanos/contactanos.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";
import { VoiceflowComponentComponent } from "../VoiceflowComponent/VoiceflowComponent.component";

@Component({
  selector: 'app-choose-agencia',
  standalone: true,
  imports: [
    CommonModule, NavegacionComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent,
    ContactanosComponent,
    FooterComponent,
    LoadingComponent,
    VoiceflowComponentComponent
],
  template: `
    <app-navegacion></app-navegacion> 
    <app-inicio id="inicio"></app-inicio>
    <app-nosotros id="nosotros" ></app-nosotros>
    <app-servicios id="servicios"></app-servicios>
    <app-blog id="blog"></app-blog>
    <app-contactanos id="contactanos"></app-contactanos>
    <app-footer></app-footer> 
    <app-voiceflow-component></app-voiceflow-component>

  `,
  styleUrls: ['./choose-agencia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseAgenciaComponent{ 

  loading = true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


}
