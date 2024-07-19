import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
      <div #lupa class="lupa" [hidden]="lupaHidden">
        <img class="choose-zoom" src="background-choose-zoom.jpg" alt="">
      </div>
    
      <app-maquina-escribir></app-maquina-escribir>
    </header>
  `,
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { 
  @ViewChild('lupa') lupa?: ElementRef;

  lupaLeft = 200; 
  lupaTop = 500; 
  lupaWidth = 200; 
  lupaHeight = 200; 
  lupaHidden = true;
  isMouseDown = false;
  isMobile = false; // Variable para detectar dispositivos móviles

  constructor(private renderer: Renderer2) {
    this.detectarDispositivoMovil();
  }

  detectarDispositivoMovil() {
    this.isMobile = window.innerWidth <= 800;
  }

  actualizarPosicionLupa(event: MouseEvent | TouchEvent) {
    if (!this.lupaHidden && (this.isMobile || this.isMouseDown)) {
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
      const left = clientX + window.scrollX - offsetX;
      const top = clientY + window.scrollY - offsetY;

      // Actualizar la posición de la lupa usando Renderer2
      this.renderer.setStyle(this.lupa?.nativeElement, 'left', `${left}px`);
      this.renderer.setStyle(this.lupa?.nativeElement, 'top', `${top}px`);
      this.renderer.setStyle(this.lupa?.nativeElement.querySelector('.choose-zoom'), 'left', `${-left}px`);
      this.renderer.setStyle(this.lupa?.nativeElement.querySelector('.choose-zoom'), 'top', `${-top}px`);
    }
  }

  ocultarLupa() {
    if (!this.isMouseDown) {
      this.lupaHidden = true;
    }
  }

  mostrarLupa() {
    if (this.isMobile && this.isMouseDown) {
      this.lupaHidden = false;
    }
  }

  activarLupa(event: MouseEvent | TouchEvent) {
    this.isMouseDown = true;
    if (this.isMobile) {
      this.mostrarLupa(); // Mostrar la lupa solo en dispositivos móviles al mantener presionado
    } else {
      this.actualizarPosicionLupa(event); // Actualizar la posición en otros dispositivos al activarse
    }
  }

  desactivarLupa() {
    this.isMouseDown = false;
    this.lupaHidden = true; // Ocultar la lupa al dejar de presionar
  }
}