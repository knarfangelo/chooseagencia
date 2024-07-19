import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
=======
import { ChangeDetectionStrategy, Component } from '@angular/core';
>>>>>>> 8b17cd4 (lupa testeo)
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
<<<<<<< HEAD
<header 
=======
    <header 
>>>>>>> 8b17cd4 (lupa testeo)
      (mousemove)="actualizarPosicionLupa($event)" 
      (mouseleave)="ocultarLupa()"
      (mousedown)="activarLupa($event)" 
      (mouseup)="desactivarLupa()"
      (touchstart)="activarLupa($event)" 
      (touchmove)="actualizarPosicionLupa($event)" 
      (touchend)="desactivarLupa()"
      (mouseenter)="mostrarLupa()">
<<<<<<< HEAD
      <div #lupa class="lupa" [hidden]="lupaHidden">
        <img class="choose-zoom" src="background-choose-zoom.jpg" alt="">
=======
      <div class="lupa" [hidden]="lupaHidden" [ngStyle]="{ left: lupaLeft + 'px', top: lupaTop + 'px' }">
        <img class="choose-zoom" [ngStyle]="{ left: -lupaLeft + 'px', top: -lupaTop + 'px' }" src="background-choose-zoom.jpg" alt="">
>>>>>>> 8b17cd4 (lupa testeo)
      </div>
    
      <app-maquina-escribir></app-maquina-escribir>
    </header>
  `,
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { 
<<<<<<< HEAD
  @ViewChild('lupa') lupa?: ElementRef;

=======
>>>>>>> 8b17cd4 (lupa testeo)
  lupaLeft = 200; 
  lupaTop = 500; 
  lupaWidth = 200; 
  lupaHeight = 200; 
  lupaHidden = true;
  isMouseDown = false;
<<<<<<< HEAD
  isMobile = false; // Variable para detectar dispositivos móviles

  constructor(private renderer: Renderer2) {
    this.detectarDispositivoMovil();
  }

  detectarDispositivoMovil() {
    this.isMobile = window.innerWidth <= 800;
  }

  actualizarPosicionLupa(event: MouseEvent | TouchEvent) {
    if (!this.lupaHidden && (this.isMobile || this.isMouseDown)) {
=======

  constructor() {
    this.lupaLeft += (this.lupaWidth / 2);
    this.lupaTop += (this.lupaHeight / 2);
  }

  actualizarPosicionLupa(event: MouseEvent | TouchEvent) {
    if (!this.lupaHidden || this.isMouseDown) {
>>>>>>> 8b17cd4 (lupa testeo)
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
<<<<<<< HEAD

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
=======
  
      // Ajustar por el desplazamiento de la página
      const offsetX = this.lupaWidth / 2;
      const offsetY = this.lupaHeight / 2;
      
      // Obtener las coordenadas ajustadas con el scroll
      this.lupaLeft = clientX + window.scrollX - offsetX;
      this.lupaTop = clientY + window.scrollY - offsetY;
>>>>>>> 8b17cd4 (lupa testeo)
    }
  }

  ocultarLupa() {
    if (!this.isMouseDown) {
      this.lupaHidden = true;
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> 8b17cd4 (lupa testeo)
