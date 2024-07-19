import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-valores',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="bloque5">
    <div class="bloque5In">
        <h4>Valores</h4>
        <p>Nos caracterizamos por tener estos pilares como agencia. </p>
    </div>
    <div class="bloque5En">
        <li>
            <p class="imgnum">1</p>Innovación
        </li>
        <li>
            <p class="imgnum1">2</p>Excelencia
        </li>
        <li>
            <p class="imgnum">3</p>Colaboración
        </li>
        <li>
            <p class="imgnum1">4</p>Responsabilidad
        </li>
        <li>
            <p class="imgnum">5</p>Valentía
        </li>
    </div>
</div>
  `,
  styleUrl: './valores.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValoresComponent { }
