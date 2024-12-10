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
import { TraductorComponent } from "../traductor/traductor.component";
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

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
    VoiceflowComponentComponent,
    TraductorComponent,
    WhatsappComponent
],
  template: `
    @if (loading) {
      <app-loading></app-loading>
    } 
    <app-navegacion></app-navegacion> 
    <app-inicio id="inicio"></app-inicio>
    <app-nosotros id="nosotros" ></app-nosotros>
    <app-servicios id="servicios"></app-servicios>
    <app-blog id="blog"></app-blog>
    <app-contactanos id="contactanos"></app-contactanos>
    <app-footer></app-footer>
    <app-voiceflow-component></app-voiceflow-component>
    <app-whatsapp></app-whatsapp>
    <app-traductor></app-traductor>
  `,
  styleUrls: ['./choose-agencia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseAgenciaComponent implements AfterViewChecked { 

  loading = true;
  width = false;
  private botLoaded = false; // Indicador de carga

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewChecked(): void {
    if (isPlatformBrowser(this.platformId) && !this.botLoaded) {
      setTimeout(() => {
        this.loading = false;
        this.botLoaded = true; // Marcar como cargado
      }, 1500);
    }
  }

}
