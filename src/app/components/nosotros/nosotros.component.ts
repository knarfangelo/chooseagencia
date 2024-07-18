import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
      <header>
        <video autoplay muted loop src="fondo-movimiento.mp4"></video>
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
          @if (isBrowser) {
             <iframe SameSite=none class="video" title="vimeo-player" src="https://player.vimeo.com/video/946631138?h=c21845dc9a" width="90%" frameborder="0" allowfullscreen=""></iframe>
          }
          <p>Nuestra historia en 1 minuto</p>
          <button>Conoce más</button>
        </div>
      </header>
  `,
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { 
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
