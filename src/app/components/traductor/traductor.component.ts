import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
      <div class="gtrans" id="google_translate_element"></div>
  `,
  styleUrl:'./traductor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraductorComponent {
  

}
