import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav class="nav">
    <a class="logo" href=""><img src="logo.png"  alt="choose agencia logo"></a>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contactanos">Contacto</a></li>
    </ul>
    <div class="item-estudio">
      <a href="https://studio.chooseagencia.com/">Estudio</a>

    </div>
  </nav>
  `,
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {



}
