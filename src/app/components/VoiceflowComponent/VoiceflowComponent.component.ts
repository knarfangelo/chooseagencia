import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-voiceflow-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div id="voiceflow-container"></div>
  `,
  styleUrls: ['./VoiceflowComponent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoiceflowComponentComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Crear el script dinámicamente
      const script = this.renderer.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';

      // Configurar la lógica que se ejecutará después de que el script se cargue
      script.onload = () => {
        if ((window as any).voiceflow) {
          (window as any).voiceflow.chat.load({
            verify: { projectID: '66a2aadb5515f333bd5e9bd6' }, // Reemplaza con tu projectID
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            allowDangerousHTML: true,
            assistant: {
              container: '#voiceflow-container', // Asegurarte que coincide con tu plantilla
              stylesheet: 'styles.css', // Cambiar si tienes un CSS personalizado
            },
          });
        } else {
          console.error('Voiceflow no está disponible.');
        }
      };

      // Agregar el script al DOM
      this.renderer.appendChild(this.el.nativeElement, script);
    }
  }
}
