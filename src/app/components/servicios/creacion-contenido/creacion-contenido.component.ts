import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creacion-contenido',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <header>
    <main>
    <h1>CREACION DE CONTENIDO</h1>
    <p>Descubre nuestras herramientas capaces de transformar conversaciones online en información estratégica para tu negocio. Identificamos las necesidades y deseos de tus clientes en tiempo real para potenciar tu marca, mejorando su posicionamiento e incrementando su comercialización.</p>
    <a href="#servicios">Regresar</a>
    <a href="#contactanos">Contáctanos</a></main>
   <iframe src="https://player.vimeo.com/video/946399549?h=ec96ea06ef" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> <img src="/servicios/creacion-contenido-informacion.jpg" alt="">

  </header>
  `,
  styleUrl: './creacion-contenido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreacionContenidoComponent { }
