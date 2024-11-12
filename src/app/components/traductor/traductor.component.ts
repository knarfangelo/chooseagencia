import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div id="glt-translate-trigger" class="pressed"><span class="notranslate">Translate »</span>
  <div class="gtrans" id="google_translate_element"></div>
</div>
      
  `,
  styleUrl:'./traductor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraductorComponent {
  

}
