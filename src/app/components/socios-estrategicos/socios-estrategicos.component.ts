import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-socios-estrategicos',
  standalone: true,
  imports: [],
  template: `
     <header>
      <h1 class="titulo">Nuestros socios estratégicos</h1>
      <main>
        <img src="socios/jmt.png" alt="jmt">
        <img src="socios/tugobierna.jpg" alt="tu gobierna">
        <img src="socios/dron.svg" alt="dron">
      </main>
    </header>
  `,
  styleUrl: './socios-estrategicos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SociosEstrategicosComponent { }
