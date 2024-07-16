import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
      <header>
        <h1>
        EXPERTOS EN 
        <span>
        ESTRATEGIA <br>
        Y MARKETING DIGITAL <br></span>
        +MODERNAS PLATAFORMAS DE IA <br>
        <span>
        CLIENTES EN
        MÁS DE 15 PAÍSES <br></span>
        </h1>
        <div class="container-video">
        <iframe class="video" title="vimeo-player" src="https://player.vimeo.com/video/946631138?h=c21845dc9a" width="90%" frameborder="0" allowfullscreen=""></iframe>
          <p>Nuestra historia en 1 minuto</p>
          <button>Conoce más</button>
        </div>
      </header>
  `,
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { }
