import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
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
             <iframe SameSite=none class="video" title="vimeo-player" src="https://player.vimeo.com/video/990225411?h=a0598f0e6a" width="90%" frameborder="0" allowfullscreen=""></iframe>
          }
          <p>Nuestra historia en 1 minuto</p>
          <a routerLink="/subnosotros">Conoce más</a>
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
