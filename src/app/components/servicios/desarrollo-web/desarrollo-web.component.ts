import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-desarrollo-web',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <header>
    <main>
    <h1>DESARROLLO WEB</h1>
    <p>En Choose diseñamos páginas web y desarrollamos tiendas virtuales, creando un valor diferencial para tu marca, fusionando tus objetivos empresariales con nuestra creatividad, obteniendo una plataforma de alto impacto con una interfaz práctica e intuitiva. Descubre con nosotros un mundo de oportunidades digitales, que te brindaran mayores ventajas competitivas para tu negocio.</p>
    <a href="#servicios">Regresar</a>
    <a href="#contactanos">Contáctanos</a></main>
   <iframe src="https://player.vimeo.com/video/946396742?h=cd6c28192b" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> <img src="/servicios/desarrollo-web-informacion.jpg" alt="">

  </header>
  `,
  styleUrl: './desarrollo-web.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesarrolloWebComponent { }
