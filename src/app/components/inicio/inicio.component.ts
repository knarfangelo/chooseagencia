import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `
    <header>
      <div class="lupa" #lupa><img class="choose-zoom" src="background-choose-zoom.jpg" alt=""></div>
    </header>
  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { 

  @ViewChild('lupa', { static: true }) lupa?: ElementRef; // Referencia al div circulo

  

}
