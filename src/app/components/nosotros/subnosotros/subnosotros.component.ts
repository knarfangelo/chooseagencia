import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../../navegacion/navegacion.component";
import { FooterComponent } from "../../footer/footer.component";
import { NuestroEquipoComponent } from "./nuestro-equipo/nuestro-equipo.component";
import { PilaresComponent } from "./pilares/pilares.component";
import { ValoresComponent } from "./valores/valores.component";

@Component({
  selector: 'app-subnosotros',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    NuestroEquipoComponent,
    PilaresComponent,
    ValoresComponent
],
  template: `
    <main>
    <div class="banner">
        <app-navegacion class="menu"></app-navegacion>
        <video loop muted autoplay class="bannerNosotros" src="/blog.mp4"></video>

    </div>
   
    <app-nuestro-equipo class="bloque1"></app-nuestro-equipo>
    <app-pilares></app-pilares>
    <app-valores></app-valores>
    <div class="bloque4">
        <h4>Trabajemos Juntos</h4>
        <p>Hacemos realidad tus ideas con estrategias digitales inteligentes y IA</p>
        <button>Conversemos </button>
    </div>
    <app-footer class="footer"></app-footer>

</main>
  `,
  styleUrl: './subnosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnosotrosComponent { }
