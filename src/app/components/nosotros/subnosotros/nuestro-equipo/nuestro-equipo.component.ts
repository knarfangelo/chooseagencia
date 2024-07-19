import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nuestro-equipo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="bloque1">
    <p>Somos Choose, agencia de comunicación estratégica, creativa, digital y tecnológica del Perú con alcance
        internacional y operaciones en más
        de 15 países de América Latina, EEUU, Europa, Asia y África.</p>
</div>    
<div class="bloque2">
    <div class="bloque2En">
        <img class="img1" src="/n1.jpg" alt="">
    </div>    
    <div class="bloque2In">
        <h1>Nuestro Equipo</h1>
        <p>Está conformado por profesionales innovadores <br /> y creativos que mediante metodologías ágiles y las
            <br /> más modernas
            herramientas digitales <br /> de inteligencia, investigación, análisis y gestión <br /> transforman los
            desafíos
            empresariales en casos de éxito.
        </p>
        <img class="img2" src="/charles.png" alt="">
    </div>
</div>
  `,
  styleUrl: './nuestro-equipo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuestroEquipoComponent { }
