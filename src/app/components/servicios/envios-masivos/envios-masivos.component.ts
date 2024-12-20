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
   <iframe src="https://player.vimeo.com/video/1024537011?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> <img src="/servicios/envios-masivos-informacion.jpg" alt="video de envios masivos de la agencia de marketing de choose">
  </header>
  `,
  styleUrl: './envios-masivos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnviosMasivosComponent { }
