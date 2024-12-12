import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-socios-estrategicos',
  standalone: true,
  imports: [],
  template: `
     <header>
      <h1 class="titulo">Nuestros socios estratégicos</h1>
      <main>
        <img src="socios/dron.svg" alt="dron">
        <img src="socios/tugobierna.png" alt="tu gobierna">
        <img class="jmt" src="socios/jmt.png" alt="jmt">
      </main>
    </header>
  `,
  styleUrl: './socios-estrategicos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SociosEstrategicosComponent { }
