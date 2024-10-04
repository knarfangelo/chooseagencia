import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { MaquinaEscribirComponent } from "./maquina-escribir/maquina-escribir.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    MaquinaEscribirComponent,
],
  template: `

  <div></div>
  <header (mousemove)="actualizarPosicionLupa($event)" (mouseleave)="ocultarLupa()">
    <img class="choose-background" src="/background-choose.jpg" alt="fondo choose oculto" loading="eager">
    <div class="lupa" [hidden]="lupaHidden" [ngStyle]="{ left: lupaLeft + 'px', top: lupaTop + 'px' }">
      <img class="choose-zoom"   [ngStyle]="{ left: -lupaLeft + 'px', top: -lupaTop + 'px' }" src="background-choose-zoom.jpg" alt="fondo choose">
    </div> 
    @if (anuncioStudio) {
    <div class="anuncio">
      <div class="info">
      <div class="operacion">
      <button (click)="cerrarAnuncio()" class="close"> X </button>
      <h1 class="titulo-anuncio">CONOCE NUESTRO ESTUDIO</h1>
      <a href="https://studio.chooseagencia.com/">Haz click aquí</a></div>
      <img class="imagen-studio" src="anuncio-studio/anuncio-studio.png" alt="anuncio"></div>
    </div>
    } 
    <app-maquina-escribir></app-maquina-escribir>
     
  </header>

  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { 



  anuncioStudio = true;
  lupaLeft = 200; 
  lupaTop = 500; 
  lupaWidth = 200; 
  lupaHeight = 200; 
  lupaHidden = true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.lupaLeft += (this.lupaWidth / 2);
    this.lupaTop += (this.lupaHeight / 2);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
  
    setTimeout(() => {
      this.anuncioStudio = false; // Ocultar el anuncio después de 10 segundos
    }, 10000); 
    }
  }
  cerrarAnuncio() {
    this.anuncioStudio = false;
  }
  actualizarPosicionLupa(event: MouseEvent) {
    this.lupaHidden = false;
    
    // Ajustar por el desplazamiento de la página
    const offsetX = this.lupaWidth / 2;
    const offsetY = this.lupaHeight / 2;
    
    // Obtener las coordenadas ajustadas con el scroll
    this.lupaLeft = event.clientX + window.scrollX - offsetX;
    this.lupaTop = event.clientY + window.scrollY - offsetY;

  }
  
  
  ocultarLupa() {
    this.lupaHidden = true;
  }
  
  
}
