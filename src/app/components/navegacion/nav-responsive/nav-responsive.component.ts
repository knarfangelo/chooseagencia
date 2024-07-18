import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav class="nav">
    <div class="titulo">
      <button (click)="chooseButton()" ><img src="/icons/burguer.svg" alt="choose agencia burguer"></button>
      <a class="logo" href=""><img src="logo-responsive.png"  alt="choose agencia logo"></a>
    </div>
    <ul class="lista" [class.open]="isOpen">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="">Contacto</a></li>
    </ul>
  </nav>
  `,
  styleUrl: './nav-responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavResponsiveComponent { 

  isOpen = false;

  chooseButton() {
      this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {


  }

}
