import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-envios-masivos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <header>
    <main>
    <h1>ENVIOS MASIVOS</h1>
    <p>En el mundo digital actual, la comunicación efectiva es esencial para el éxito. Con soluciones de email marketing, puedes crear campañas personalizadas que se ajusten a tus necesidades específicas.</p>
    <a href="#servicios">Regresar</a>
    <a href="#contactanos">Contáctanos</a></main>
   <iframe src="https://player.vimeo.com/video/946396742?h=cd6c28192b" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> <img src="/servicios/envios-masivos-informacion.jpg" alt="">
  </header>
  `,
  styleUrl: './envios-masivos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnviosMasivosComponent { }
