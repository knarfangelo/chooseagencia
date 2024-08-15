import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-regulacion-contenidos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <header>
    <main>
    <h1>REGULACIÓN DE CONTENIDO</h1>
    <p>En un mundo donde la información es poder y la privacidad un bien preciado, el derecho al olvido se convierte en un instrumento fundamental para navegar con seguridad el océano digital.</p>
    <a href="#servicios">Regresar</a>
    <a href="#contactanos">Contáctanos</a>
  </main>
    <iframe src="https://player.vimeo.com/video/946396742?h=cd6c28192b" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> <img src="/servicios/regulacion-contenido-informacion.jpg" alt="video de regulacion de contenidos de la agencia de marketing de choose">
</header>
  `,
  styleUrl: './regulacion-contenidos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegulacionContenidosComponent { }
