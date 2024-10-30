import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-voiceflow-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div id="voiceflow-container" style="position: relative; height: 500px;"></div>
  `,
  styleUrls: ['./VoiceflowComponent.component.css'],
})
export class VoiceflowComponentComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      script.onload = () => {
        // Cargar el bot de Voiceflow
        (window as any).voiceflow.chat.load({
          verify: { projectID: '66a2aadb5515f333bd5e9bd6' }, // Reemplaza 'PROJECT_ID' con tu ID de proyecto
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          assistant: {
            stylesheet: 'styles.css'
          }
        }).then(() => {
          // Limpiar mensajes anteriores
          (window as any).voiceflow.chat.proactive.clear();

          // Agregar mensajes proactivos
          (window as any).voiceflow.chat.proactive.push(
            { 
              type: 'text', 
              payload: { message: 'Hola, Soy el bot de Choose' } 
            }, 
          );
        });
      };
      this.renderer.appendChild(document.body, script);
    }
  }
}
