import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-voiceflow-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="bot">
  <div id="voiceflow-container"></div></div>`,
  styleUrls: ['./VoiceflowComponent.component.css'],
})
export class VoiceflowComponentComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      script.onload = () => {
        (window as any).voiceflow.chat.load({
          verify: { projectID: '66a2aadb5515f333bd5e9bd6' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
        });
      };
      document.getElementById('voiceflow-container')?.appendChild(script);
   
        
    }
  }

}
