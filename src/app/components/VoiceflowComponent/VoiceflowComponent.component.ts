import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-voiceflow-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<div id="voiceflow-container"></div>`,
  styleUrl: './VoiceflowComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoiceflowComponentComponent { 
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
