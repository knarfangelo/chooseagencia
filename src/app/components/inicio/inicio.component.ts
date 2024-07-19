import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { MaquinaEscribirComponent } from "./maquina-escribir/maquina-escribir.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    MaquinaEscribirComponent
  ],
  template: `
    <header 
      (mousemove)="actualizarPosicionLupa($event)" 
      (mouseleave)="ocultarLupa()"
      (mousedown)="activarLupa($event)" 
      (mouseup)="desactivarLupa()"
      (touchstart)="activarLupa($event)" 
      (touchmove)="actualizarPosicionLupa($event)" 
      (touchend)="desactivarLupa()"
      (mouseenter)="mostrarLupa()">
      <div class="lupa" [hidden]="lupaHidden" [ngStyle]="{ left: lupaLeft + 'px', top: lupaTop + 'px' }">
        <img class="choose-zoom" [ngStyle]="{ left: -lupaLeft + 'px', top: -lupaTop + 'px' }" src="background-choose-zoom.jpg" alt="">
      </div>
    
      <app-maquina-escribir></app-maquina-escribir>
    </header>
  `,
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { 
  lupaLeft = 200; 
  lupaTop = 500; 
  lupaWidth = 200; 
  lupaHeight = 200; 
  lupaHidden = true;
  isMouseDown = false;

  constructor() {
    this.lupaLeft += (this.lupaWidth / 2);
    this.lupaTop += (this.lupaHeight / 2);
  }

  actualizarPosicionLupa(event: MouseEvent | TouchEvent) {
    if (!this.lupaHidden || this.isMouseDown) {
      // Obtener las coordenadas del evento
      let clientX: number = 0;
      let clientY: number = 0;
      
      if (event instanceof MouseEvent) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else if (event instanceof TouchEvent) {
        const touch = event.touches[0];
        clientX = touch.clientX;
        clientY = touch.clientY;
      }
  
      // Ajustar por el desplazamiento de la página
      const offsetX = this.lupaWidth / 2;
      const offsetY = this.lupaHeight / 2;
      
      // Obtener las coordenadas ajustadas con el scroll
      this.lupaLeft = clientX + window.scrollX - offsetX;
      this.lupaTop = clientY + window.scrollY - offsetY;
    }
  }

  ocultarLupa() {
    if (!this.isMouseDown) {
      this.lupaHidden = true;
    }
  }

  mostrarLupa() {
    this.lupaHidden = false;
  }

  activarLupa(event: MouseEvent | TouchEvent) {
    this.isMouseDown = true;
    this.lupaHidden = false;
    this.actualizarPosicionLupa(event);
  }

  desactivarLupa() {
    this.isMouseDown = false;
  }
}
