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
      <li><a href="">Inicio</a></li>
      <li><a href="">Nosotros</a></li>
      <li><a href="">Servicios</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Contacto</a></li>
    </ul>
  </nav>
  `,
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent { }
