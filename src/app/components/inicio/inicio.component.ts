import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MaquinaEscribirComponent } from "./maquina-escribir/maquina-escribir.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MaquinaEscribirComponent,
],
  template: `

  <div></div>
  <header (mousemove)="actualizarPosicionLupa($event)" (mouseleave)="ocultarLupa()">
    <img class="choose-background" src="/background-choose.jpg" alt="fondo choose oculto" loading="eager">
    <div class="lupa" [hidden]="lupaHidden" [ngStyle]="{ left: lupaLeft + 'px', top: lupaTop + 'px' }">
      <img class="choose-zoom"   [ngStyle]="{ left: -lupaLeft + 'px', top: -lupaTop + 'px' }" src="background-choose-zoom.jpg" alt="fondo choose">
    </div> 
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
