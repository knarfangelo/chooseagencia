import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pilares',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="bloque3">
      <div class="fondo"></div>
    <div class="bloque3Fondo"><img src="/fondoCamino.jpg" alt=""></div>
    <div class="bloque3In">
        <img class="img3" src="/visionv3.png" alt="">
        <h4>Visión</h4>
        <p>Ser líderes mundiales en estrategias digitales innovadoras y operaciones exitosas <br> impulsen el éxito
            de nuestros socios inspirando y transformando <br> el panorama digital.</p>
    </div>
    <div class="bloque3En">
        <img class="img3" src="/mision_v2.png" alt="">
        <h4>Misión</h4>
        <p>Transformar desafíos empresariales en operaciones exitosas, <br>optimizando tiempo y recursos para
            alcanzar
            <br> metas comerciales.
        </p>
    </div>
</div>
  `,
  styleUrl: './pilares.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilaresComponent { }
